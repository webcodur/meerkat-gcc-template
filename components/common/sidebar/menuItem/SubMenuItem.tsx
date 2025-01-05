import Link from 'next/link';
import type { SubMenuItem as SubMenuItemType } from '@/types/sidebar';

interface SubMenuItemProps {
    item: SubMenuItemType;
    currentPath: string;
}

export default function SubMenuItem({ item, currentPath }: SubMenuItemProps) {
    const SubIcon = item.icon;
    const isActive = currentPath === item.path;
    
    return (
        <li>
            <Link
                href={item.path}
                className={`
                    block p-2 rounded-lg
                    ${isActive 
                        ? 'bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 text-white border border-blue-300/50' 
                        : 'text-gray-400 hover:bg-slate-700/50'
                    }
                `}
            >
                <div className="flex items-center">
                    {SubIcon && <SubIcon className={`me-3 text-lg ${isActive ? 'text-blue-300' : 'text-gray-500'}`} />}
                    {item.title}
                </div>
            </Link>
        </li>
    );
} 