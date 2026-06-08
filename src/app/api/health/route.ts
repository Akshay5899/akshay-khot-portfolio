import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/db';

export async function GET() {
  let dbStatus = 'disconnected';
  try {
    await connectToDatabase();
    if (mongoose.connection.readyState === 1) {
      dbStatus = 'connected';
    }
  } catch (error) {
    dbStatus = `error: ${(error as Error).message}`;
  }

  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: dbStatus,
    environment: process.env.NODE_ENV || 'development',
  });
}
