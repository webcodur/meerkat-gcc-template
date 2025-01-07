import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { SubMenuItem } from '@/types/sidebar';

interface AuthState {
    isAuthenticated: boolean;
    user: {
        name: string;
        email: string;
        image?: string;
    } | null;
}

type ModalType = 'settings' | 'language' | null;

// LOCAL STORAGE 전역변수
export const themeAtom = atomWithStorage<'light' | 'dark'>('theme', 'light');
export const dirAtom = atomWithStorage<'ltr' | 'rtl'>('dir', 'ltr');
export const langAtom = atomWithStorage<'ko' | 'en' | 'ar'>('lang', 'ko');

// MEMORY ONLY 전역변수
export const currentPathAtom = atom<string>('/');
export const sidebarOpenAtom = atom<boolean>(true);
export const modalAtom = atom<ModalType>(null);
export const isPageChangedAtom = atom<boolean>(false);

export const authAtom = atom<AuthState>({
    isAuthenticated: false,
    user: null,
});

export const submenuAtom = atom<{
    isOpen: boolean;
    items: SubMenuItem[];
    position: { top: number; left: number } | null;
}>({
    isOpen: false,
    items: [],
    position: null,
});

export const expandedMenuAtom = atom<string | null>(null);

// 사이드바 초기 마운트 상태 추적
export const sidebarInitialMountAtom = atom<boolean>(true);