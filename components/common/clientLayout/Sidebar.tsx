'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    IoCar, 
    IoPeople, 
    IoFlask, 
    IoChevronDown, 
    IoChevronUp,
    IoInformationCircle,
    IoPerson,
    IoSettings,
    IoList,
    IoGrid,
    IoBeaker
} from 'react-icons/io5';
import type { IconType } from 'react-icons';
import { useAtom } from 'jotai';
import { sidebarOpenAtom, dirAtom, currentPathAtom } from '@/atoms';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface MenuItem {
    title: string;
    path?: string;
    icon: IconType;
    subMenus?: {
        title: string;
        path: string;
        icon: IconType;
    }[];
}

export default function Sidebar() {
    const t = useTranslations();
    const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

    const menuItems: MenuItem[] = [
        {
            title: t('sidebar_menu_parking_management'),
            path: '/parking',
            icon: IoCar,
            subMenus: [
                { title: t('parking_info'), path: '/parking/info', icon: IoInformationCircle },
                { title: t('worker_management'), path: '/parking/workers', icon: IoPerson },
                { title: t('parking_policy'), path: '/parking/policy', icon: IoSettings },
            ],
        },
        {
            title: t('sidebar_menu_user_management'),
            path: '/users',
            icon: IoPeople,
            subMenus: [
                { title: t('user_submenu_1'), path: '/users/sub1', icon: IoList },
                { title: t('user_submenu_2'), path: '/users/sub2', icon: IoGrid },
            ],
        },
        {
            title:'lab',
            path: '/users',
            icon: IoFlask,
            subMenus: [
                { title: 'pagination', path: '/labs/pagination', icon: IoBeaker },
            ],
        },
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

    const toggleMenu = (title: string) => {
        setExpandedMenus(prev => 
            prev.includes(title)
                ? prev.filter(item => item !== title)
                : [...prev, title]
        );
    };

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
                            const isExpanded = expandedMenus.includes(item.title);
                            
                            return (
                                <li key={item.title}>
                                    <button
                                        onClick={() => toggleMenu(item.title)}
                                        className={`w-full flex items-center justify-between p-2 rounded-lg text-gray-700 hover:bg-gray-100 ${
                                            currentPath === item.path ? 'bg-gray-100 font-medium' : ''
                                        }`}
                                    >
                                        <div className="flex items-center">
                                            <Icon className="me-3 text-xl" />
                                            {item.title}
                                        </div>
                                        {item.subMenus && (
                                            isExpanded ? <IoChevronUp /> : <IoChevronDown />
                                        )}
                                    </button>
                                    {isExpanded && item.subMenus && (
                                        <ul className="mt-2 ms-6 space-y-2">
                                            {item.subMenus.map((subMenu) => {
                                                const SubIcon = subMenu.icon;
                                                return (
                                                    <li key={subMenu.path}>
                                                        <Link
                                                            href={subMenu.path}
                                                            className={`block p-2 rounded-lg text-gray-600 hover:bg-gray-100 ${
                                                                currentPath === subMenu.path
                                                                    ? 'bg-gray-100 font-medium'
                                                                    : ''
                                                            }`}
                                                        >
                                                            <div className="flex items-center">
                                                                <SubIcon className="me-3 text-lg" />
                                                                {subMenu.title}
                                                            </div>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
