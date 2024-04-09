import { NextRequest, NextResponse } from 'next/server';

import mongoose from 'mongoose';
import prisma from '@/libs/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    const existing = await prisma.subscription.findUnique({
      where: {
        email
      }
    })
    
    if (existing) {
      return NextResponse.json(
        {
          message: 'You Already Subscribed!',
        },
        {
          status: 409,
        }
      );
    }

    await prisma.subscription.create({
      data: {
        email
      }
    })
    
    return NextResponse.json(
      {
        message: 'Thank you for subscribing!',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}
