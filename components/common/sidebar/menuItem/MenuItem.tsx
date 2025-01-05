import { IoChevronDown } from 'react-icons/io5';
import type { MenuItem as MenuItemType } from '@/types/sidebar';
import SubMenuItem from './SubMenuItem';
import { memo } from 'react';

/**
 * MenuItem 컴포넌트의 Props 인터페이스
 * @property {MenuItemType} item - 메뉴 아이템 데이터
 * @property {string} currentPath - 현재 활성화된 경로
 * @property {boolean} isExpanded - 서브메뉴 확장 여부
 * @property {() => void} onToggle - 서브메뉴 토글 핸들러
 */
interface MenuItemProps {
    item: MenuItemType;
    currentPath: string;
    isExpanded: boolean;
    onToggle: () => void;
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
function MenuItem({ item, currentPath, isExpanded, onToggle }: MenuItemProps) {
    // 현재 경로가 메뉴 경로로 시작하는지 확인
    const isActive = item.path ? currentPath.startsWith(item.path) : false;

    // 서브메뉴 중에 현재 경로와 일치하는 것이 있는지 확인
    const hasActiveChild = item.subMenus?.some(
        subMenu => currentPath === subMenu.path
    );

    return (
        <li>
            {/* 메인 메뉴 버튼 */}
            <button
                onClick={onToggle}
                className={`
                    w-full flex items-center justify-between p-2 rounded-lg
                    transition-all duration-200 ease-in-out
                    border
                    ${(isActive || hasActiveChild)
                        ? 'bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 text-white border-blue-300/50 shadow-lg shadow-blue-500/10' 
                        : 'text-gray-300 border-transparent hover:bg-gradient-to-br hover:from-slate-600/30 hover:to-slate-700/30 hover:border-white/10'
                    }
                `}
            >
                {/* 타이틀 */}
                <span className={isActive ? 'font-medium' : ''}>
                    {item.title}
                </span>

                {/* 확장/축소 안내 아이콘 */}
                {item.subMenus && (
                    <div 
                        className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                        }`}
                    >
                        <IoChevronDown 
                            className={(isActive || hasActiveChild) ? 'text-blue-300' : 'text-gray-400'} 
                        />
                    </div>
                )}
            </button>
            
            {/* 서브메뉴 영역 */}
            {isExpanded && item.subMenus && (
                <ul className="mt-2 ms-6 space-y-2">
                    {item.subMenus.map((subMenu) => (
                        <SubMenuItem
                            key={subMenu.path}
                            item={subMenu}
                            currentPath={currentPath}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
}

// 불필요한 리렌더링 방지를 위한 메모이제이션
export default memo(MenuItem); 