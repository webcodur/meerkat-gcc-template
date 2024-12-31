'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import SidebarToggle from './SidebarToggle';
import MainContent from './MainContent';

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true)}, []);

    if (!isMounted) return null; 

    return (
        <>
            <SidebarToggle />
            <Sidebar />
            <Profile />
            <MainContent>{children}</MainContent>
        </>
    );
} 