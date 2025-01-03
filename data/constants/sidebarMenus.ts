import {
    IoCar,
    IoPeople,
    IoFlask,
    IoInformationCircle,
    IoPerson,
    IoSettings,
    IoList,
    IoGrid,
    IoBeaker,
} from 'react-icons/io5';
import type { MenuItem } from '@/types/sidebar';

export const getMenuItems = (t: (key: string) => string): MenuItem[] => [
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
        title: 'lab',
        path: '/users',
        icon: IoFlask,
        subMenus: [{ title: 'pagination', path: '/labs/pagination', icon: IoBeaker }],
    },
]; 