'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import { sidebarOpenAtom, dirAtom, currentPathAtom } from '@/atoms';
import { useEffect, useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { getMenuItems } from '@/data/constants/sidebarMenus';
import MenuItem from './MenuItem';

export default function Sidebar() {
    const t = useTranslations();
    const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
    const menuItems = getMenuItems(t);

    const [isOpen] = useAtom(sidebarOpenAtom);
    const [dir] = useAtom(dirAtom);
    const isRTL = dir === 'rtl';
    
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useAtom(currentPathAtom);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setCurrentPath(pathname);
    }, [pathname, setCurrentPath]);

    const toggleMenu = useCallback((title: string) => {
        setExpandedMenus((prev) =>
            prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
        );
    }, []);

    if (!mounted) {
        return (
            <aside className="lg:relative fixed top-0 inset-inline-start-0 h-screen w-64 bg-white shadow-lg z-10">
                <div className="h-full overflow-y-auto">
                    <div className="p-4">
                        <div className="flex items-center rounded-lg align-center justify-center">
                            <h1 className="text-xl font-bold mb-4 text-center ms-[50px] text-gray-800">
                                {t('sidebar_title')}
                            </h1>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }

    return (
        <aside
            className={`lg:relative fixed top-0 inset-inline-start-0 h-screen bg-white shadow-lg transition-all duration-200 z-10 ${
                isOpen 
                    ? 'translate-x-0 lg:translate-x-0 w-64' 
                    : isRTL 
                        ? 'translate-x-full lg:translate-x-0 w-64 lg:w-0' 
                        : '-translate-x-full lg:translate-x-0 w-64 lg:w-0'
            }`}
        >
            <div className="h-full overflow-y-auto">
                <div className="p-4">
                    <Link
                        href="/"
                        className="flex items-center rounded-lg hover:bg-gray-100 justify-center align-center m-auto mt-[20px] mb-[10px]"
                    >
                        <h1 className="text-xl font-bold text-center p-2 text-gray-800">
                            {t('sidebar_title')}
                        </h1>
                    </Link>
                    <nav>
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.title}
                                    item={item}
                                    currentPath={currentPath}
                                    isExpanded={expandedMenus.includes(item.title)}
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
