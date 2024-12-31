import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [{
            light: {
                "primary": "#0F766E",     // 기본 브랜드 색상 (청록색)
                "secondary": "#475569",    // 보조 색상 (슬레이트 그레이)
                "accent": "#0EA5E9",       // 강조 색상 (스카이 블루)
                "neutral": "#1F2937",      // 중립 색상 (다크 그레이)
                "base-100": "#FFFFFF",     // 배경색 (흰색)
                "base-200": "#F1F5F9",     // 보조 배경색 (연한 슬레이트)
                "base-300": "#E2E8F0",     // 3단계 배경색
                "info": "#3ABFF8",         // 정보 색상 (하늘색)
                "success": "#36D399",      // 성공 색상 (녹색)
                "warning": "#FBBD23",      // 경고 색상 (노란색)
                "error": "#DC2626",        // 에러 색상 (빨간색)
            },
            dark: {
                "primary": "#14B8A6",      // 밝은 청록색
                "secondary": "#94A3B8",    // 밝은 슬레이트
                "accent": "#38BDF8",       // 밝은 스카이 블루
                "neutral": "#CBD5E1",      // 밝은 그레이
                "base-100": "#1E293B",     // 어두운 배경
                "base-200": "#334155",     // 어두운 보조 배경
                "base-300": "#475569",     // 어두운 3단계 배경
                "info": "#7DD3FC",         // 밝은 하늘색
                "success": "#4ADE80",      // 밝은 녹색
                "warning": "#FCD34D",      // 밝은 노란색
                "error": "#EF4444",        // 밝은 빨간색
            }
        }],
    },
};

export default config;
