import type { MenuItem } from '@/types/sidebar';

export const getMenuItems = (t: (key: string) => string): MenuItem[] => [
  {
    title: t('사이드바메뉴_주차관리'),
    path: '/parking',
    subMenus: [
      { title: t('주차정보'), path: '/parking/info' },
      { title: t('근무자관리'), path: '/parking/workers' },
      { title: t('주차정책'), path: '/parking/policy' },
    ],
  },
  {
    title: t('사이드바메뉴_사용자관리'),
    path: '/users',
    subMenus: [
      { title: t('사용자서브메뉴1'), path: '/users/sub1' },
      { title: t('사용자서브메뉴2'), path: '/users/sub2' },
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
