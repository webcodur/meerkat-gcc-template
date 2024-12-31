'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    IoHome,
    IoCar,
    IoPeople,
    IoStatsChart,
    IoSettings
} from "react-icons/io5";
import { useAtom } from 'jotai';
import { sidebarOpenAtom } from '@/atoms';

const menuItems = [
    { title: '홈', path: '/', icon: IoHome },
    { title: '주차장 관리', path: '/parking', icon: IoCar },
    { title: '회원 관리', path: '/users', icon: IoPeople },
    { title: '통계', path: '/statistics', icon: IoStatsChart },
    { title: '설정', path: '/settings', icon: IoSettings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen] = useAtom(sidebarOpenAtom);

    return (
        <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            <div className="p-4">
                <Link href="/" className="flex items-center rounded-lg hover:bg-gray-100">
                    <h1 className="text-xl font-bold mb-4 text-center ml-[50px] text-gray-800">MEERKAT</h1>
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
                                            pathname === item.path ? 'bg-gray-100 font-medium' : ''
                                        }`}
                                    >
                                        <Icon className="mr-3 text-xl" />
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