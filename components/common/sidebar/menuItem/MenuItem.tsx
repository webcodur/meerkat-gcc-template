'use client';

import { IoChevronDown } from 'react-icons/io5';
import type { MenuItem as MenuItemType } from '@/types/sidebar';
import { memo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import { submenuAtom, expandedMenuAtom } from '@/atoms';

/**
 * MenuItem 컴포넌트의 Props 인터페이스
 * @property {MenuItemType} item - 메뉴 아이템 데이터
 */
interface MenuItemProps {
    item: MenuItemType;
}

/**
 * 사이드바의 메뉴 아이템을 렌더링하는 컴포넌트
 * 
 * @description
 * - 메인 메뉴 아이템과 해당 서브메뉴들을 렌더링
 * - 메탈릭 하이테크 UI 스타일 가이드를 따르는 디자인
 * - 활성화 상태에 따른 시각적 피드백 제공
 * - 서브메뉴 확장/축소 기능 지원
 */
function MenuItem({ item }: MenuItemProps) {
    const pathname = usePathname();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [, setSubmenu] = useAtom(submenuAtom);
    const [expandedMenu, setExpandedMenu] = useAtom(expandedMenuAtom);
    
    const actualPath = pathname.replace(/^\/[^/]+/, '');
    const isActive = item.path ? actualPath.startsWith(item.path) : false;
    const isExpanded = expandedMenu === item.title;

    const handleToggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation(); // 이벤트 전파 중단
        
        const buttonRect = buttonRef.current?.getBoundingClientRect();
        if (!buttonRect || !item.subMenus) return;

        if (isExpanded) {
            // 이미 열려있으면 닫기
            setExpandedMenu(null);
            setSubmenu({ isOpen: false, items: [], position: null });
        } else {
            // 닫혀있으면 열기
            setExpandedMenu(item.title);
            setSubmenu({
                isOpen: true,
                items: item.subMenus,
                position: {
                    top: buttonRect.top,
                    left: buttonRect.right + 8,
                }
            });
        }
    };

    return (
        <li className="relative">
            {/* 메뉴 버튼 */}
            <button
                ref={buttonRef}
                onClick={handleToggleMenu}
                data-menu-button
                className={`
                    w-full flex items-center justify-between p-2 rounded-lg
                    border-transparent
                    hover:bg-base-300/70
                `}
            >
                {/* 메뉴 이름 */}
                <span className={isActive ? 'font-medium' : ''}>
                    {item.title}
                </span>

                {/* 열림 표시 아이콘 */}
                {item.subMenus && (
                    <div 
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                        <IoChevronDown />
                    </div>
                )}
            </button>
        </li>
    );
}

// 불필요한 리렌더링 방지를 위한 메모이제이션
export default memo(MenuItem); 