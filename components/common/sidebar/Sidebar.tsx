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
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
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
        setExpandedMenu((prev) => (prev === title ? null : title));
    }, []);

    const sidebarBaseStyle = `
        lg:sticky lg:top-0 fixed top-0 inset-inline-start-0 h-screen 
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
        shadow-xl transition-all duration-200 z-10
    `;

    const sidebarVisibilityStyle = isOpen 
        ? 'translate-x-0 lg:translate-x-0 w-64' 
        : isRTL 
            ? 'translate-x-full lg:translate-x-0 w-64 lg:w-0' 
            : '-translate-x-full lg:translate-x-0 w-64 lg:w-0';

    if (!mounted) {
        return (
            <aside className={sidebarBaseStyle}>
                <div className="h-full overflow-y-auto">
                    <div className="p-4">
                        <div className="flex items-center rounded-lg align-center justify-center">
                            <h1 className="text-xl font-bold mb-4 text-center ms-[50px] text-gray-100">
                                {t('sidebar_title')}
                            </h1>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }

    return (
        <aside className={`${sidebarBaseStyle} ${sidebarVisibilityStyle}`}>
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <div className="p-4">
                    <Link
                        href="/"
                        className="flex items-center rounded-lg hover:bg-slate-700/50 justify-center align-center m-auto mt-[20px] mb-[10px] transition-colors duration-200"
                    >
                        <h1 className="text-xl font-bold text-center p-2 text-gray-100">
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
                                    isExpanded={expandedMenu === item.title}
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
