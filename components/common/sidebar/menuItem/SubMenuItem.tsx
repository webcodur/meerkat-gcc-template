'use client';

import Link from 'next/link';
import type { SubMenuItem as SubMenuItemType } from '@/types/sidebar';
import { usePathname } from 'next/navigation';

interface SubMenuItemProps {
    item: SubMenuItemType;
}

export default function SubMenuItem({ item }: SubMenuItemProps) {
    const SubIcon = item.icon;
    const pathname = usePathname();
    const pathWithoutLocale = pathname.slice(3)
    const isActive = pathWithoutLocale === item.path
    
    return (
        <li>
            <Link
                href={item.path}
                className={`
                    block p-2 rounded-lg
                    ${isActive 
                        ? 'text-gray-900 font-bold' 
                        : 'text-gray-600 font-normal'
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