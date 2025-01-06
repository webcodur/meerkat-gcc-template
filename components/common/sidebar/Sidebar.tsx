// 클라이언트 사이드 렌더링 선언
'use client';

// 필요한 의존성 모듈 임포트
import { useAtom } from 'jotai';
import { sidebarOpenAtom, dirAtom } from '@/atoms';
import { useState, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { getMenuItems } from '@/data/constants/sidebarMenus';
import MenuItem from '@/components/common/sidebar/menuItem/MenuItem';
import SidebarLogo from './SidebarLogo';

export default function Sidebar() {
    // 다국어 번역 훅 초기화
    const t = useTranslations();

    // 현재 펼쳐진 메뉴 상태 관리
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
    const [clickedMenu, setClickedMenu] = useState<string | null>(null);
    // 사이드바 메뉴 아이템 목록 가져오기
    const menuItems = getMenuItems(t);

    // 사이드바 열림/닫힘 상태 관리
    const [isOpen] = useAtom(sidebarOpenAtom);
    // RTL/LTR 방향 상태 관리
    const [dir] = useAtom(dirAtom);
    // RTL 여부 확인
    const isRTL = dir === 'rtl';

    // 컨텐츠 표시 상태 관리
    const [showContent, setShowContent] = useState(true);

    // isOpen 상태 변경 감지 및 애니메이션 처리
    useEffect(() => {
        // 닫을 때: 먼저 컨텐츠를 숨기고, 그 다음 사이드바를 닫음
        if (!isOpen) {
            setShowContent(false);
            const timer = setTimeout(() => {}, 200);
            return () => clearTimeout(timer);
        }
        // 열 때: 먼저 사이드바를 열고, 그 다음 컨텐츠를 표시
        else {
            setShowContent(false);
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // 메뉴 토글 핸들러 - 메모이제이션 적용
    const toggleMenu = useCallback((title: string) => {
        setClickedMenu(title);
        setExpandedMenu((prev) => (prev === title ? null : title));
    }, []);

    // 사이드바 너비/위치 전환 애니메이션 - 지연 시간 추가
    const sidebarVisibilityStyle = isOpen
        ? 'w-64 translate-x-0 lg:translate-x-0 transition-[width,transform] duration-200 ease-in-out'
        : isRTL
        ? 'w-0 translate-x-full lg:translate-x-0 transition-[width,transform] duration-200 ease-in-out delay-150'
        : 'w-0 -translate-x-full lg:translate-x-0 transition-[width,transform] duration-200 ease-in-out delay-150';

    // 컨텐츠 투명도 전환 애니메이션 - duration 조정
    const contentVisibilityStyle = showContent
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-in-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in-out';

    // 내부 컨테이너 스타일 - 최소 너비 설정
    const innerContainerStyle = `min-w-[16rem] ${contentVisibilityStyle}`;

    return (
        <aside
            className={`
        lg:sticky lg:top-0 fixed top-0 inset-inline-start-0 h-screen shadow-xl z-10 overflow-hidden ${sidebarVisibilityStyle}
    `}
        >
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <div className={`p-4 ${innerContainerStyle}`}>
                    <SidebarLogo />
                    <nav>
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.title}
                                    item={item}
                                    isExpanded={
                                        expandedMenu === item.title && clickedMenu === item.title
                                    }
                                    onToggle={() => toggleMenu(item.title)}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
}
