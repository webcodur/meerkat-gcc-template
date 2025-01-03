import { IoChevronDown } from 'react-icons/io5';
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
    const isActive = currentPath === item.path;

    return (
        <li>
            <button
                onClick={onToggle}
                className={`
                    w-full flex items-center justify-between p-2 rounded-lg
                    transition-all duration-200 ease-in-out
                    ${isActive 
                        ? 'bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 text-white border border-blue-300/50' 
                        : 'text-gray-300 hover:bg-slate-700/50'
                    }
                `}
            >
                <div className="flex items-center">
                    {Icon && <Icon className={`me-3 text-xl ${isActive ? 'text-blue-300' : 'text-gray-400'}`} />}
                    {item.title}
                </div>
                {item.subMenus && (
                    <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        <IoChevronDown className={isActive ? 'text-blue-300' : 'text-gray-400'} />
                    </div>
                )}
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