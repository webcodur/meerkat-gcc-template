import React, { useEffect, useRef } from 'react';
import SubMenuItem from './SubMenuItem';
import { submenuAtom, expandedMenuAtom } from '@/atoms';
import { useAtom } from 'jotai';

const SubMenu = () => {
    const [submenu, setSubmenu] = useAtom(submenuAtom);
    const [, setExpandedMenu] = useAtom(expandedMenuAtom);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.closest('button[data-menu-button]')) {
                return;
            }

            if (menuRef.current && !menuRef.current.contains(target)) {
                setSubmenu({ isOpen: false, items: [], position: null });
                setExpandedMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setSubmenu, setExpandedMenu]);

    return (
        <>
            {submenu.isOpen && submenu.position && (
                <div
                    className="fixed z-[100]"
                    style={{
                        top: submenu.position.top,
                        left: submenu.position.left,
                    }}
                >
                    <div
                        ref={menuRef}
                        className={`
                            min-w-[200px]
                            bg-base-200/95 backdrop-blur-sm rounded-lg shadow-lg
                            border border-base-300
                            p-2 space-y-2
                        `}
                    >
                        {submenu.items.map((item) => (
                            <SubMenuItem key={item.path} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default SubMenu;