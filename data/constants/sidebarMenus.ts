import type { MenuItem } from '@/types/sidebar';

export const getMenuItems = (t: (key: string) => string): MenuItem[] => [
  {
    title: t('메인메뉴_주차관리'),
    path: '/parking',
    subMenus: [
      { title: t('서브메뉴_주차정보'), path: '/parking/info' },
      { title: t('서브메뉴_근무자관리'), path: '/parking/workers' },
      { title: t('서브메뉴_주차정책'), path: '/parking/policy' },
    ],
  },
  {
    title: t('메인메뉴_사용자관리'),
    path: '/users',
    subMenus: [
      { title: t('서브메뉴_사용자메뉴1'), path: '/users/sub1' },
      { title: t('서브메뉴_사용자메뉴2'), path: '/users/sub2' },
    ],
  },
  {
    title: 'UI labs',
    path: '/labs',
    subMenus: [
      { title: 'pagination', path: '/labs/pagination' },
      { title: 'pattern', path: '/labs/pattern' },
      { title: 'button', path: '/labs/button' },
      { title: 'toggleButton', path: '/labs/toggleButton' },
      { title: 'dndTest', path: '/labs/dndTest' },
      { title: 'slider', path: '/labs/slider' },
      { title: 'framerMotion', path: '/labs/framerMotion' },
      { title: 'datepicker', path: '/labs/datepicker' },
    ],
  },
];
