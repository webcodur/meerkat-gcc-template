import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import { useAtom } from 'jotai';
import { sidebarOpenAtom } from '@/atoms';
import { usePathname } from 'next/navigation';
import { getMenuItems } from '@/data/constants/sidebarMenus';
import { useTranslations } from 'next-intl';

export default function Breadcrumb() {
  const [sidebarOpen] = useAtom(sidebarOpenAtom);
  const pathnameWithoutLocale = (usePathname() || '/').slice(3);

  const msClass = sidebarOpen
    ? 'ms-[30px] transition-[margin] duration-400 ease-in-out'
    : 'ms-[70px] transition-[margin] duration-400 ease-in';

  const t = useTranslations();
  const menuItems = getMenuItems(t);

  const currentMenu = menuItems.find(
    (menu) => menu.path && pathnameWithoutLocale.startsWith(menu.path)
  );
  const currentSubMenu = currentMenu?.subMenus?.find(
    (subMenu) => pathnameWithoutLocale === subMenu.path
  );

  return (
    <div className={`flex text-md breadcrumbs mt-4 font-medium ${msClass} `}>
      <ul>
        {/* 홈 */}
        <li>
          <Link href="/" className="flex items-center gap-1 h-6">
            <IoHome className="w-4 h-4" /> 백두산주차장
          </Link>
        </li>
        {/* 메인 메뉴 */}
        {currentMenu && (
          <li>
            <span className="flex items-center gap-1 h-6">{currentMenu.title}</span>
          </li>
        )}

        {/* 서브 메뉴 */}
        {currentSubMenu && (
          <li>
            <span className="flex items-center gap-1 h-6">{currentSubMenu.title}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
