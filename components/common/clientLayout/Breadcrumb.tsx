import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
export default function Breadcrumb() {
    return (
        <div className="text-md breadcrumbs ms-14 mt-4 font-medium">
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
