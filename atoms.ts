import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

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
export const authAtom = atom<AuthState>({
    isAuthenticated: false,
    user: null,
});