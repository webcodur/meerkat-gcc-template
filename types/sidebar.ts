import { IconType } from 'react-icons';

export interface SubMenuItem {
    title: string;
    path: string;
    icon?: IconType;
}

export interface MenuItem {
    title: string;
    path?: string;
    icon?: IconType;
    subMenus?: SubMenuItem[];
} 