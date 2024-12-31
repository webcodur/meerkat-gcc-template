'use client';

import { useAtom } from 'jotai';
import { authAtom, settingsOpenAtom, dirAtom } from '@/atoms';
import { IoSettingsOutline, IoSettings } from 'react-icons/io5';

const Settings = () => {
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
        <div className={`absolute top-3 ${dir === 'rtl' ? 'left-3' : 'right-3'}`}>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="hover:opacity-80">
                    <div className="w-8 h-8 rounded-full ring ring-primary/30 ring-offset-base-100 ring-offset-1 hover:ring-primary bg-base-100 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {auth.isAuthenticated && (
                                <IoSettings className="w-5/6 h-5/6 text-primary/70" />
                            )}
                            {!auth.isAuthenticated && (
                                <IoSettingsOutline className="w-5/6 h-5/6 text-base-content/40" />
                            )}
                        </div>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52 mt-3">
                    {auth.isAuthenticated && (
                        <>
                            <li><button onClick={handleSettingsClick} className="text-base-content/70 hover:text-primary">계정 설정</button></li>
                            <li><button className="text-base-content/70 hover:text-primary">프로필 변경</button></li>
                            <div className="divider my-0"></div>
                            <li>
                                <button 
                                    className="text-error/70 hover:bg-error/10 hover:text-error"
                                    onClick={handleLogout}
                                >
                                    로그아웃
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
                                로그인
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Settings;
