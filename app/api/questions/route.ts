import { QUESTIONS_DB } from '@/lib/questions';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({
      questions: QUESTIONS_DB,
      total: QUESTIONS_DB.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}
