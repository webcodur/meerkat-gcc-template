'use client';

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
        <>
            <SidebarToggle />
            <Sidebar />
            <Profile />
            <MainContent>{children}</MainContent>
        </>
    );
} 