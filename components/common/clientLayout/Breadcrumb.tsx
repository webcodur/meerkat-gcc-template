import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import { useAtom } from 'jotai';
import { sidebarOpenAtom } from '@/atoms';

export default function Breadcrumb() {

    const [sidebarOpen] = useAtom(sidebarOpenAtom);
    const msClass = sidebarOpen 
        ? 'ms-1 transition-[margin] duration-400 ease-in-out' 
        : 'ms-7 transition-[margin] duration-400 ease-in';

    return (
        <div className={`text-md breadcrumbs mt-4 font-medium ${msClass}`}
        >
            <ul>
                <li>
                    <Link href="/" className="flex items-center gap-1">
                        <IoHome className="w-4 h-4 " />   
                    </Link>
                </li>
                <li>
                    <p className="flex items-center gap-1">
                        메뉴
                    </p>
                </li>
                <li>
                    <Link href="/" className="flex items-center gap-1">
                        서브메뉴
                    </Link>
                </li>
            </ul>
        </div>
    );
}
