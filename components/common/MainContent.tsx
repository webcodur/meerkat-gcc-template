'use client';

import { useAtom } from 'jotai';
import { sidebarOpenAtom } from '@/atoms';

/**
 * MainContent 컴포넌트
 * 
 * 목적:
 * - 메인 콘텐츠 영역의 레이아웃을 사이드바 상태에 따라 동적으로 조정
 * - 레이아웃 전환 시 부드러운 애니메이션 효과 제공
 * 
 * 주요 기능:
 * 1. 사이드바 상태에 따른 레이아웃 조정
 *    - 열린 상태: 왼쪽 마진 16rem (ml-64)
 *    - 닫힌 상태: 왼쪽 마진 0 (ml-0)
 * 
 * 2. 스타일링
 *    - transition-all: 모든 속성에 대한 전환 효과 적용
 *    - p-8: 전체 패딩 2rem (32px)
 * 
 * 참고:
 * - 클라이언트 컴포넌트로 분리된 이유는 Jotai의 useAtom이 클라이언트 사이드에서만 동작하기 때문
 * - layout.tsx는 서버 컴포넌트로 유지하면서 상태 관리가 필요한 부분만 분리
 */
export default function MainContent({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen] = useAtom(sidebarOpenAtom);

    return (
        <main className={`transition-all duration-200 ${isOpen ? 'ml-64' : 'ml-0'} p-8`}>
            {children}
        </main>
    );
} 