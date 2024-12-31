'use client';

import { useAtom } from 'jotai';
import { sidebarOpenAtom, dirAtom } from '@/atoms';

/**
 * MainContent 컴포넌트
 * 
 * 목적:
 * - 메인 콘텐츠 영역의 레이아웃을 사이드바 상태에 따라 동적으로 조정
 * - 레이아웃 전환 시 부드러운 애니메이션 효과 제공
 * - RTL/LTR 모드 지원
 * 
 * 주요 기능:
 * 1. 사이드바 상태와 방향에 따른 레이아웃 조정
 *    - LTR + 열린 상태: 왼쪽 마진 16rem (ml-64)
 *    - LTR + 닫힌 상태: 왼쪽 마진 0 (ml-0)
 *    - RTL + 열린 상태: 오른쪽 마진 16rem (mr-64)
 *    - RTL + 닫힌 상태: 오른쪽 마진 0 (mr-0)
 * 
 * 2. 스타일링
 *    - transition-all: 모든 속성에 대한 전환 효과 적용
 *    - p-8: 전체 패딩 2rem (32px)
 */
export default function MainContent({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen] = useAtom(sidebarOpenAtom);
    const [dir] = useAtom(dirAtom);
    const isRTL = dir === 'rtl';

    const marginClass = isOpen 
        ? isRTL ? 'mr-64' : 'ml-64'
        : isRTL ? 'mr-0' : 'ml-0';

    return (
        <main className={`transition-all duration-200 ${marginClass} p-8`}>
            {children}
        </main>
    );
} 