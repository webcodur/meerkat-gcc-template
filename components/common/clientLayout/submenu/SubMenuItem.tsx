/**
 * 사이드바의 서브 메뉴 아이템을 렌더링하는 컴포넌트
 * - 현재 경로에 따라 활성화 상태를 시각적으로 표시
 * - 아이콘이 있는 경우 해당 아이콘을 표시하고, 없는 경우 점(dot) 아이콘을 표시
 */
'use client';

import Link from 'next/link';
import type { SubMenuItem as SubMenuItemType } from '@/types/sidebar';
import { usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import { submenuAtom, expandedMenuAtom, isPageChangedAtom } from '@/atoms';

interface SubMenuItemProps {
  item: SubMenuItemType;
}

export default function SubMenuItem({ item }: SubMenuItemProps) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.slice(3);
  const isActive = pathWithoutLocale === item.path;
  const [, setSubmenu] = useAtom(submenuAtom);
  const [, setExpandedMenu] = useAtom(expandedMenuAtom);
  const [, setIsPageChanged] = useAtom(isPageChangedAtom);

  const handleClick = (e: React.MouseEvent) => {
    if (isActive) {
      e.preventDefault();
      return;
    }
    setIsPageChanged(true);
    setSubmenu({ isOpen: false, items: [], position: null });
    setExpandedMenu(null);
  };

  return (
    <li className="list-none">
      <Link
        href={item.path}
        onClick={handleClick}
        className={`
                    block p-2 rounded-lg
                    border-base-content/10
                    ${
                      isActive
                        ? 'bg-base-300 text-primary font-medium shadow-inner border-base-content/10'
                        : 'border-base-100 hover:bg-base-300/70 hover:shadow-sm hover:border-base-content/5'
                    }
                `}
      >
        <div className="flex items-center gap-2">
          <div
            className={`
                            w-1.5 h-1.5 rounded-full
                            transition-all duration-200
                            ${
                              isActive
                                ? 'bg-primary scale-125'
                                : 'bg-base-content/50 group-hover:bg-base-content/70'
                            }
                        `}
          />
          <span
            className={`
                        transition-all duration-200
                        ${isActive ? 'translate-x-0.5' : 'group-hover:translate-x-0.5'}
                    `}
          >
            {item.title}
          </span>
        </div>
      </Link>
    </li>
  );
}
