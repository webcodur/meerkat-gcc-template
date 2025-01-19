import type { MenuItem } from '@/types/sidebar';

export const getMenuItems = (t: (key: string) => string): MenuItem[] => [
  {
    title: t('sidebar_menu_parking_management'),
    path: '/parking',
    subMenus: [
      { title: t('parking_info'), path: '/parking/info' },
      { title: t('worker_management'), path: '/parking/workers' },
      { title: t('parking_policy'), path: '/parking/policy' },
    ],
  },
  {
    title: t('sidebar_menu_user_management'),
    path: '/users',
    subMenus: [
      { title: t('user_submenu_1'), path: '/users/sub1' },
      { title: t('user_submenu_2'), path: '/users/sub2' },
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
