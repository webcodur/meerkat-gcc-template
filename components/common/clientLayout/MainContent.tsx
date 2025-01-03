'use client';

/**
 * MainContent 컴포넌트
 * 
 * 목적:
 * - 메인 콘텐츠 영역의 레이아웃을 사이드바 상태에 따라 동적으로 조정
 * - 레이아웃 전환 시 부드러운 애니메이션 효과 제공
 * - RTL/LTR 모드 지원
 */
export default function MainContent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="relative z-0 min-h-screen w-full transition-all duration-200 px-8">
            {children}
        </main>
    );
} 