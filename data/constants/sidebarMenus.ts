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
        title: 'lab',
        path: '/users',
        subMenus: [{ title: 'pagination', path: '/labs/pagination' }],
    },
    {
        title: 'lab1',
        path: '/users1',
        subMenus: [{ title: 'pagination1', path: '/labs/pagination1' }],
    },
    {
        title: 'lab2',
        path: '/users2',
        subMenus: [{ title: 'pagination2', path: '/labs/pagination2' }],
    },
    {
        title: 'lab3',
        path: '/users3',
        subMenus: [{ title: 'pagination3', path: '/labs/pagination3' }],
    },
    {
        title: 'lab4',
        path: '/users4',
        subMenus: [{ title: 'pagination4', path: '/labs/pagination4' }],
    },
    {
        title: 'lab5',
        path: '/users5',
        subMenus: [{ title: 'pagination5', path: '/labs/pagination5' }],
    },
    {
        title: 'lab6',
        path: '/users6',
        subMenus: [{ title: 'pagination6', path: '/labs/pagination6' }],
    },
]; 