// 클라이언트 사이드 렌더링 선언
'use client';

// 필요한 의존성 모듈 임포트
import { useAtom } from 'jotai';
import { sidebarOpenAtom, dirAtom, sidebarInitialMountAtom } from '@/atoms';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { getMenuItems } from '@/data/constants/sidebarMenus';
import MenuItem from '@/components/common/sidebar/menuItem/MenuItem';
import SidebarLogo from './SidebarLogo';

export default function Sidebar() {
    // 다국어 번역 훅 초기화
    const t = useTranslations();

    // 사이드바 메뉴 아이템 목록 가져오기
    const menuItems = getMenuItems(t);

    // 사이드바 열림/닫힘 상태 관리
    const [isOpen] = useAtom(sidebarOpenAtom);
    // RTL/LTR 방향 상태 관리
    const [dir] = useAtom(dirAtom);
    // RTL 여부 확인
    const isRTL = dir === 'rtl';

    // 컨기 마운트 상태 관리
    const [isInitialMount, setIsInitialMount] = useAtom(sidebarInitialMountAtom);
    // 컨텐츠 표시 상태 관리
    const [showContent, setShowContent] = useState(true);
    const [isTransforming, setIsTransforming] = useState(false);

    // 초기 마운트 시에는 transition 없이 바로 적용
    useEffect(() => {
        if (isInitialMount) {
            setShowContent(isOpen);
            setIsInitialMount(false);
        }
    }, []);

    // isOpen 상태 변경 감지 및 애니메이션 처리
    useEffect(() => {
        if (isInitialMount) return;

        if (!isOpen) {
            // 닫을 때: 먼저 opacity 0으로 변경
            setShowContent(false);
            // opacity 애니메이션이 끝난 후 transform 적용
            const timer = setTimeout(() => {
                setIsTransforming(true);
            }, 150);
            return () => clearTimeout(timer);
        } else {
            // 열 때: transform 먼저 적용
            setIsTransforming(false);
            // transform 애니메이션이 끝난 후 opacity 1로 변경
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen, isInitialMount]);

    // 사이드바 너비/위치 스타일
    const sidebarWidthStyle = (isOpen || !isTransforming) ? 'w-64' : 'w-0';
    const sidebarTransformStyle = (!isOpen && isTransforming)
        ? isRTL
            ? 'translate-x-full'
            : '-translate-x-full'
        : 'translate-x-0';

    // transition 효과는 초기 마운트가 아닐 때만 적용
    const transitionStyle = !isInitialMount
        ? 'transition-[width,transform] duration-200 ease-in-out'
        : '';

    const sidebarVisibilityStyle = `${sidebarWidthStyle} ${sidebarTransformStyle} ${transitionStyle}`;

    // 컨텐츠 투명도 스타일도 초기 마운트 여부에 따라 transition 적용
    const contentVisibilityStyle = showContent
        ? `opacity-100 scale-100 ${!isInitialMount ? 'transition-[opacity,transform] duration-150 ease-in-out' : ''}`
        : `opacity-0 scale-95 ${!isInitialMount ? 'transition-[opacity,transform] duration-150 ease-in-out' : ''}`;

    const innerContainerStyle = `min-w-[16rem] ${contentVisibilityStyle}`;

    return (
        <aside
            className={`
                lg:sticky lg:top-0 fixed top-0 inset-inline-start-0 h-screen 
                shadow-xl z-50 overflow-hidden bg-base-100 
                ${sidebarVisibilityStyle}
            `}
        >
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent bg-base-100">
                <div className={`p-4 ${innerContainerStyle}`}>
                    <SidebarLogo />
                    <nav>
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.title}
                                    item={item}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
}
