import { NextRequest, NextResponse } from 'next/server';

import { getNowPlaying } from '@/services/spotify';

export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  const response = await getNowPlaying();

  return NextResponse.json(response?.data);
}