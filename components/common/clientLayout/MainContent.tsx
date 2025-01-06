'use client';

import { useAtom } from 'jotai';
import { dirAtom } from '@/atoms';

/**
 * MainContent 컴포넌트
 * 
 * 목적:
 * - 메인 콘텐츠 영역의 레이아웃을 사이드바 상태에 따라 동적으로 조정
 * - 레이아웃 전환 시 부드러운 애니메이션 효과 제공
 * - RTL/LTR 모드 지원
 * - RTL 모드에서 스크롤바 위치 조정
 */

export default function MainContent({
    children,
}: {
    children: React.ReactNode;
}) {
    const [dir] = useAtom(dirAtom);

    return (
        <main 
            dir={dir} 
            className="relative flex-1 w-full transition-all duration-200"
        >
            <div className="absolute inset-0 px-6 overflow-y-auto">
                {children}
            </div>
        </main>
    );
} 