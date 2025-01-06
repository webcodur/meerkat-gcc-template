import { Noto_Sans_KR, DM_Serif_Text, Cairo } from 'next/font/google'
import localFont from 'next/font/local'

// Pretendard Variable 폰트 설정
export const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
})

// Noto Sans KR 설정
export const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ko',
})

// DM Serif Text 설정
export const dmSerifText = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-en',
})

// Cairo 설정
export const cairo = Cairo({
  weight: ['400', '500', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-ar',
}) 