'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoCar, IoPeople } from 'react-icons/io5';
import { useAtom } from 'jotai';
import { sidebarOpenAtom, dirAtom, currentPathAtom } from '@/atoms';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Sidebar() {
    const t = useTranslations();

    const menuItems = [
        { title: t('sidebar_menu_parking_management'), path: '/parking', icon: IoCar },
        { title: t('sidebar_menu_user_management'), path: '/users', icon: IoPeople },
    ];

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

    const translateClass = isOpen 
        ? 'translate-x-0' 
        : isRTL 
            ? 'translate-x-full'
            : '-translate-x-full';

    if (!mounted) {
        return (
            <aside className={`fixed top-0 ${isRTL ? 'inset-inline-end-0' : 'inset-inline-start-0'} h-full w-64 bg-white shadow-lg z-10 ${isRTL ? 'translate-x-full' : '-translate-x-full'}`}>
                <div className="p-4">
                    <div className="flex items-center rounded-lg align-center justify-center">
                        <h1 className="text-xl font-bold mb-4 text-center ms-[50px] text-gray-800">
                            {t('sidebar_title')}
                        </h1>
                    </div>
                </div>
            </aside>
        );
    }

    return (
        <aside
            className={`fixed top-0 ${isRTL ? 'inset-inline-end-0' : 'inset-inline-start-0'} h-full w-64 bg-white shadow-lg transition-transform duration-200 z-10 ${translateClass}`}
        >
            <div className="p-4">
                <Link href="/" className="flex items-center rounded-lg hover:bg-gray-100 justify-center align-center m-auto mt-[20px] mb-[10px]">
                    <h1 className="text-xl font-bold text-center p-2 text-gray-800">
                        {t('sidebar_title')}
                    </h1>
                </Link>
                <nav>
                    <ul className="space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className={`flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 ${
                                            currentPath === item.path
                                                ? 'bg-gray-100 font-medium'
                                                : ''
                                        }`}
                                    >
                                        <Icon className={`me-3 text-xl`} />
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
