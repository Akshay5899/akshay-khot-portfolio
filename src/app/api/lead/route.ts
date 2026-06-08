import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectToDatabase } from '@/lib/db';
import { Lead } from '@/models/Lead';
import { handleApiError, ApiError } from '@/lib/api-error';
import { isRateLimited } from '@/lib/rate-limit';

const leadSchema = z.object({
  email: z.string().email('Please provide a valid email address'),
  source: z.string().default('newsletter'),
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (isRateLimited(ip)) {
      throw new ApiError('Too many requests. Please try again later.', 429);
    }

    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    try {
      await connectToDatabase();
      
      const existingLead = await Lead.findOne({ email: validatedData.email });
      if (existingLead) {
        return NextResponse.json({
          success: true,
          message: 'You have already subscribed to our newsletter! Thank you.',
        });
      }

      const newLead = new Lead(validatedData);
      await newLead.save();
    } catch (dbError) {
      console.warn('⚠️ Database connection or save failed. Simulating successful response in demo/dev mode.', dbError);
      if (process.env.NODE_ENV === 'production') {
        throw new ApiError('Database submission failed. Please try again later.', 500);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the Nexvora Tech newsletter!',
    });
  } catch (error) {
    return handleApiError(error);
  }
}
