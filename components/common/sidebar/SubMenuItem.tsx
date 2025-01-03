import Link from 'next/link';
import type { SubMenuItem as SubMenuItemType } from '@/types/sidebar';

interface SubMenuItemProps {
    item: SubMenuItemType;
    currentPath: string;
}

export default function SubMenuItem({ item, currentPath }: SubMenuItemProps) {
    const SubIcon = item.icon;
    
    return (
        <li>
            <Link
                href={item.path}
                className={`block p-2 rounded-lg text-gray-600 hover:bg-gray-100 ${
                    currentPath === item.path ? 'bg-gray-100 font-medium' : ''
                }`}
            >
                <div className="flex items-center">
                    <SubIcon className="me-3 text-lg" />
                    {item.title}
                </div>
            </Link>
        </li>
    );
} 