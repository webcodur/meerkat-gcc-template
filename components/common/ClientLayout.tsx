'use client';

import { Provider } from 'jotai';
import Sidebar from './Sidebar';
import Profile from './Profile';
import SidebarToggle from './SidebarToggle';
import MainContent from './MainContent';

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider>
            <SidebarToggle />
            <Sidebar />
            <Profile />
            <MainContent>{children}</MainContent>
        </Provider>
    );
} 