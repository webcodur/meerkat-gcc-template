'use client';

import { useAtom } from 'jotai';
import { dirAtom, isPageChangedAtom } from '@/atoms';
// import Footer from '@/components/common/clientLayout/Footer';

/**
 * MainContent 컴포넌트
 *
 * 목적:
 * - 메인 콘텐츠 영역의 레이아웃을 사이드바 상태에 따라 동적으로 조정
 * - 레이아웃 전환 시 부드러운 애니메이션 효과 제공
 * - RTL/LTR 모드 지원
 * - RTL 모드에서 스크롤바 위치 조정
 * - 페이지 전환 시 페이지 로딩 상태 opacity 로 표현
 */

export default function MainContent({ children }: { children: React.ReactNode }) {
  const [dir] = useAtom(dirAtom);
  const [isPageChanged] = useAtom(isPageChangedAtom);

  return (
    <main dir={dir} className={`relative flex-1 w-full `}>
      <div className={`absolute inset-0 overflow-y-auto`}>
        <div
          className={`px-10 py-4 h-16 transition-all duration-400 ${
            isPageChanged ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
}
