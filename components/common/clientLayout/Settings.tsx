'use client';

import { useAtom } from 'jotai';
import { authAtom, settingsOpenAtom, dirAtom } from '@/atoms';
import { IoSettingsOutline, IoSettings } from 'react-icons/io5';
import { useTranslations } from 'next-intl';

const Settings = () => {
    const t = useTranslations();
    const [auth, setAuth] = useAtom(authAtom);
    const [settingsOpen , setSettingsOpen] = useAtom(settingsOpenAtom);
    const [dir] = useAtom(dirAtom);

    const handleLogin = () => {
        setAuth({
            isAuthenticated: true,
            user: {
                name: '테스트 사용자',
                email: 'test@example.com'
            }
        });
    };

    const handleLogout = () => {
        setAuth({
            isAuthenticated: false,
            user: null
        });
    };

    const handleSettingsClick = () => {
        setSettingsOpen(!settingsOpen);
    };

    return (
        <div className={`absolute top-3 ${dir === 'rtl' ? 'left-3' : 'right-3'} z-20`}>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="hover:opacity-100">
                    <div className="w-10 h-10 rounded-full relative bg-gradient-to-br from-gray-300 via-white to-gray-200 shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.7)] transition-all duration-300 border-2 border-white">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {auth.isAuthenticated && (
                                <IoSettings className="w-6 h-6 text-gray-700 drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]" />
                            )}
                            {!auth.isAuthenticated && (
                                <IoSettingsOutline className="w-6 h-6 text-gray-500 drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]" />
                            )}
                        </div>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg bg-gradient-to-br from-gray-100 to-white rounded-box w-52 mt-3 border border-white/50">
                    {auth.isAuthenticated && (
                        <>
                            <li><button onClick={handleSettingsClick} className="text-base-content/70 hover:text-primary">{t('account_management')}</button></li>
                            <li><button className="text-base-content/70 hover:text-primary">{t('change_profile')}</button></li>
                            <div className="divider my-0"></div>
                            <li>
                                <button 
                                    className="text-error/70 hover:bg-error/10 hover:text-error"
                                    onClick={handleLogout}
                                >
                                    {t('logout')}
                                </button>
                            </li>
                        </>
                    )}
                    {!auth.isAuthenticated && (
                        <li>
                            <button 
                                className="text-primary/70 hover:bg-primary/10 hover:text-primary"
                                onClick={handleLogin}
                            >
                                {t('login')}
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Settings;
