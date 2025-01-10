import localFont from 'next/font/local';

// Pretendard
export const pretendard = localFont({
  src: '../assets/fonts/Pretendard.woff2',
  variable: '--font-ko',
  display: 'swap',
});

// DM Serif Text
export const dmSerifText = localFont({
  src: '../assets/fonts/DMSerifText.woff2',
  variable: '--font-en',
  display: 'swap',
});

// Cairo
export const cairo = localFont({
  src: '../assets/fonts/Cairo.woff2',
  variable: '--font-ar',
  display: 'swap',
});
