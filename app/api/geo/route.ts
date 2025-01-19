import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      next: {
        revalidate: 3600, // 1시간 캐시
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || typeof data !== 'object') {
      throw new Error('Invalid response data');
    }

    return NextResponse.json({
      country_name: data.country_name || null,
      city: data.city || null,
      timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  } catch (error) {
    console.error('Geo API Error:', error instanceof Error ? error.message : 'Unknown error');

    return NextResponse.json(
      {
        country_name: null,
        city: null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      { status: 200 }
    ); // 에러 시에도 200 반환하고 기본값 제공
  }
}
