'use client';

import React, { useState, useEffect } from 'react';
import { DateDisplay } from '@/components/ui/dateDisplay/DateDisplay';

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col w-full h-full p-8">
            <div className="flex justify-center mb-8">
                <DateDisplay
                    date={currentTime}
                    showRelative={true}
                    showDetails={true}
                    showLocation={true}
                />
            </div>

            <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="p-3 bg-base-200/50 rounded-lg backdrop-blur-sm">
                        긴 콘텐츠 예시 {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
