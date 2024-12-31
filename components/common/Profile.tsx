'use client';
import { useAtom } from 'jotai';
import { authAtom } from '@/atoms';
import { FaRegUser, FaUserCircle } from 'react-icons/fa';

const Profile = () => {
    const [auth, setAuth] = useAtom(authAtom);

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

    return (
        <div className="absolute top-3 right-3">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="hover:opacity-80">
                    <div className="w-8 h-8 rounded-full ring ring-primary/30 ring-offset-base-100 ring-offset-1 hover:ring-primary bg-base-100 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {auth.isAuthenticated && (
                                <FaUserCircle className="w-full h-full text-primary/70" />
                            )}
                            {!auth.isAuthenticated && (
                                <FaRegUser className="w-4/6 h-4/6 text-base-content/40" />
                            )}
                        </div>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52 mt-3">
                    {auth.isAuthenticated && (
                        <>
                            <li><a className="text-base-content/70 hover:text-primary">계정 설정</a></li>
                            <li><a className="text-base-content/70 hover:text-primary">프로필 변경</a></li>
                            <div className="divider my-0"></div>
                            <li>
                                <a 
                                    className="text-error/70 hover:bg-error/10 hover:text-error"
                                    onClick={handleLogout}
                                >
                                    로그아웃
                                </a>
                            </li>
                        </>
                    )}
                    {!auth.isAuthenticated && (
                        <li>
                            <a 
                                className="text-primary/70 hover:bg-primary/10 hover:text-primary"
                                onClick={handleLogin}
                            >
                                로그인
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
