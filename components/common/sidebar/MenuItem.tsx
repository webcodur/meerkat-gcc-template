import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import type { MenuItem as MenuItemType } from '@/types/sidebar';
import SubMenuItem from './SubMenuItem';
import { memo } from 'react';

interface MenuItemProps {
    item: MenuItemType;
    currentPath: string;
    isExpanded: boolean;
    onToggle: () => void;
}

function MenuItem({ item, currentPath, isExpanded, onToggle }: MenuItemProps) {
    const Icon = item.icon;

    return (
        <li>
            <button
                onClick={onToggle}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-gray-700 hover:bg-gray-100 ${
                    currentPath === item.path ? 'bg-gray-100 font-medium' : ''
                }`}
            >
                <div className="flex items-center">
                    <Icon className="me-3 text-xl" />
                    {item.title}
                </div>
                {item.subMenus && (isExpanded ? <IoChevronUp /> : <IoChevronDown />)}
            </button>
            
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

export default memo(MenuItem); 