import { DM_Serif_Text, Cairo } from 'next/font/google';
import localFont from 'next/font/local';

// Pretendard
export const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  variable: '--font-ko',
  display: 'swap',
});

// DM Serif Text
export const dmSerifText = DM_Serif_Text({
  weight: ['400'],
  display: 'swap',
  variable: '--font-en',
});

// Cairo
export const cairo = Cairo({
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-ar',
});
