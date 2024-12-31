'use client';
import Image from 'next/image';

const Profile = () => {
    return (
        <div className="absolute top-4 right-4">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:ring-accent transition-colors">
                            <Image
                                src="/images/profile-placeholder.png"
                                alt="프로필 이미지"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 mt-4">
                    <li><a className="text-neutral hover:text-primary">계정 설정</a></li>
                    <li><a className="text-neutral hover:text-primary">프로필 변경</a></li>
                    <div className="divider my-0"></div>
                    <li><a className="text-error hover:bg-error hover:text-base-100">로그아웃</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
