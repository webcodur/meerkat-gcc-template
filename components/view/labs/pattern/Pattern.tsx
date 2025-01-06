import React from 'react';
import MetallicPatternHorizon from '@/components/ui/pattern/MetallicPatternHorizon';
import MetallicPatternVertical from '@/components/ui/pattern/MetallicPatternVertical';
import MetallicPatternBrushed from '@/components/ui/pattern/MetallicPatternBrushed';
import MetallicPatternNoise from '@/components/ui/pattern/MetallicPatternNoise';

const Pattern = () => {
    return (
        <div className="space-y-8 p-4">
            <section>
                <h1 className="text-xl font-bold mb-2">Pattern1: Horizontal</h1>
                <MetallicPatternHorizon className="w-full h-64 rounded-lg" />
            </section>

            <section>
                <h1 className="text-xl font-bold mb-2">Pattern2: Vertical</h1>
                <MetallicPatternVertical className="w-full h-64 rounded-lg" />
            </section>

            <section>
                <h1 className="text-xl font-bold mb-2">Pattern3: Brushed</h1>
                <MetallicPatternBrushed className="w-full h-64 rounded-lg" />
            </section>

            <section>
                <h1 className="text-xl font-bold mb-2">Pattern4: Noise</h1>
                <MetallicPatternNoise className="w-full h-64 rounded-lg" />
            </section>
        </div>
    );
};

export default Pattern;
