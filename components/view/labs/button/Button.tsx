'use client';

import React from 'react';
import DeepReliefButton from '@/components/ui/button/DeepReliefButton';
import HalfReliefButton from '@/components/ui/button/HalfReliefButton';
import SoftReliefButton from '@/components/ui/button/SoftReliefButton';

const Button = () => {
    return (
        <div className="flex flex-col gap-12 p-8">
            {/* Deep Relief 버튼 섹션 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2">Deep Relief Button</h2>
                <div className="flex flex-wrap gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-gray-600">Linear</span>
                        <DeepReliefButton variant="linear" width={120} height={60} fontSize={30}>
                            76
                        </DeepReliefButton>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-gray-600">Oval</span>
                        <DeepReliefButton variant="oval" width={80} height={60} fontSize={40}>
                            i
                        </DeepReliefButton>
                    </div>
                </div>
            </section>

            {/* Half Relief 버튼 섹션 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2">Half Relief Button</h2>
                <div className="flex flex-wrap gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-gray-600">기본</span>
                        <HalfReliefButton />
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b ">Soft Relief Button</h2>
                <div className="p-8 bg-gray-100">
                    <h2 className="text-2xl mb-4">Gold Buttons</h2>
                    <div className="flex flex-wrap gap-2">
                        <SoftReliefButton variant="basic" color="gold">
                            Basic
                        </SoftReliefButton>
                        <SoftReliefButton variant="glossy" color="gold">
                            Glossy
                        </SoftReliefButton>
                    </div>

                    <h2 className="text-2xl mt-6 mb-4">Silver Buttons</h2>
                    <div className="flex flex-wrap gap-2">
                        <SoftReliefButton variant="basic" color="silver">
                            Basic
                        </SoftReliefButton>
                        <SoftReliefButton variant="glossy" color="silver">
                            Glossy
                        </SoftReliefButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Button;
