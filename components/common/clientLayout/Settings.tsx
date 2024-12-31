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
            <div className="dropdown dropdown-end [&>*]:!transition-none">
                <div tabIndex={0} role="button" className="!transition-none">
                    <div className="w-10 h-10 rounded-full relative bg-gradient-to-br from-gray-300 via-white to-gray-200 shadow-[0_0_25px_8px_rgba(255,255,255,0.8)] hover:shadow-[0_0_30px_12px_rgba(255,255,255,0.9)] border-[3px] border-white !transition-none">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {auth.isAuthenticated && (
                                <IoSettings className="w-6 h-6 text-gray-700 drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                            )}
                            {!auth.isAuthenticated && (
                                <IoSettingsOutline className="w-6 h-6 text-gray-700 drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                            )}
                        </div>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] bg-gradient-to-br from-slate-100 via-white to-slate-50 rounded-box w-52 mt-3 border-[3px] border-white/80 backdrop-blur-sm [&>*]:!transition-none">
                    {auth.isAuthenticated && (
                        <>
                            <li>
                                <button 
                                    onClick={handleSettingsClick} 
                                    className="text-gray-700 hover:bg-gradient-to-br hover:from-slate-700 hover:via-slate-600 hover:to-slate-700 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:border-blue-300/50 !transition-none"
                                >
                                    {t('account_management')}
                                </button>
                            </li>
                            <li>
                                <button 
                                    className="text-gray-700 hover:bg-gradient-to-br hover:from-slate-700 hover:via-slate-600 hover:to-slate-700 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:border-blue-300/50 !transition-none"
                                >
                                    {t('change_profile')}
                                </button>
                            </li>
                            <div className="divider my-0"></div>
                            <li>
                                <button 
                                    className="text-red-500 hover:bg-gradient-to-br hover:from-red-700 hover:via-red-600 hover:to-red-700 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:border-red-300/50 !transition-none"
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
                                className="text-blue-500 hover:bg-gradient-to-br hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:border-blue-300/50 !transition-none"
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
