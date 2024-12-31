import { atom } from 'jotai';

export const sidebarOpenAtom = atom<boolean>(true);

interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    image?: string;
  } | null;
}

export const authAtom = atom<AuthState>({
  isAuthenticated: false,
  user: null,
}); 