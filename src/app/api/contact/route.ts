import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectToDatabase } from '@/lib/db';
import { Contact } from '@/models/Contact';
import { handleApiError, ApiError } from '@/lib/api-error';
import { isRateLimited } from '@/lib/rate-limit';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (isRateLimited(ip)) {
      throw new ApiError('Too many requests. Please try again later.', 429);
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    try {
      await connectToDatabase();
      const newContact = new Contact(validatedData);
      await newContact.save();
    } catch (dbError) {
      console.warn('⚠️ Database connection or save failed. Simulating successful response in demo/dev mode.', dbError);
      if (process.env.NODE_ENV === 'production') {
        throw new ApiError('Database submission failed. Please try again later.', 500);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! We will contact you soon.',
    });
  } catch (error) {
    return handleApiError(error);
  }
}
