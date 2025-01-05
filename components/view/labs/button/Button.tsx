import React from 'react';
import MetalButton from '@/components/ui/button/Button';

const Button = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 align-center h-screen">
            <h1 className="text-3xl font-bold width-[100px]">{'Metal Button'}</h1>
            <h2 className="text-xl">{'radial Button'}</h2>
            <MetalButton variant="radial" width={120} height={120} fontSize={50}>
                ✈
            </MetalButton>
            <h2 className="text-xl">{'Linear Button'}</h2>
            <MetalButton variant="linear" width={120} height={60} fontSize={30}>
                76
            </MetalButton>
            <h2 className="text-xl">{'Oval Button'}</h2>
            <MetalButton variant="oval" width={80} height={80} fontSize={40}>
                i
            </MetalButton>
        </div>
    );
};

export default Button;
