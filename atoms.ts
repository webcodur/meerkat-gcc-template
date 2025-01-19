import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

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

// ============================ LOCAL STORAGE ============================

export const themeAtom = atomWithStorage(
  'theme',
  'light',
  createJSONStorage(() => localStorage)
);
export const dirAtom = atomWithStorage(
  'dir',
  'ltr',
  createJSONStorage(() => localStorage)
);

export const langAtom = atomWithStorage<'ko' | 'en' | 'ar'>(
  'lang',
  'ko',
  createJSONStorage(() => localStorage)
);

// NOTE: 언어팩 로딩 실패 테스트
// export const langAtom = atomWithStorage<string>('lang', 'invalid-lang-code');

// ============================ SESSION STORAGE ============================

export const isFirstVisitAtom = atomWithStorage<boolean>('isFirstVisit', true, {
  getItem: (key) => {
    const value = sessionStorage.getItem(key);
    if (value === null) return true;
    return value === 'true';
  },
  setItem: (key, value) => {
    sessionStorage.setItem(key, String(value));
  },
  removeItem: (key) => {
    sessionStorage.removeItem(key);
  },
});

// ============================ MEMORY ONLY ============================

export const currentPathAtom = atom<string>('/');
export const sidebarOpenAtom = atom<boolean>(true);
export const modalAtom = atom<ModalType>(null);
export const isPageChangedAtom = atom<boolean>(false);

export const authAtom = atom<AuthState>({
  // 로그인 상태
  isAuthenticated: false,
  user: null,
});

export const submenuAtom = atom<{
  // 사이드바 메뉴 상태
  isOpen: boolean;
  items: SubMenuItem[];
  position: { top: number; start: number } | null;
}>({
  isOpen: false,
  items: [],
  position: null,
});

export const expandedMenuAtom = atom<string | null>(null); // 확장된 메뉴 상태

// 사이드바 초기 마운트 상태 추적
export const sidebarInitialMountAtom = atom<boolean>(true);
