import React from 'react';
import DeepReliefButton from '@/components/ui/button/DeepReliefButton';

const Button = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 align-center h-screen">
            <h1 className="text-3xl font-bold width-[100px]">{'Deep Relief Button'}</h1>
            <h2 className="text-xl">{'Radial Button'}</h2>
            <DeepReliefButton variant="radial" width={120} height={120} fontSize={50}>
                ✈
            </DeepReliefButton>
            <h2 className="text-xl">{'Linear Button'}</h2>
            <DeepReliefButton variant="linear" width={120} height={60} fontSize={30}>
                76
            </DeepReliefButton>
            <h2 className="text-xl">{'Oval Button'}</h2>
            <DeepReliefButton variant="oval" width={80} height={80} fontSize={40}>
                i
            </DeepReliefButton>
        </div>
    );
};

export default Button; 