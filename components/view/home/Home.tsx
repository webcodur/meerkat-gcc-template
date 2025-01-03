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
        <div className="flex flex-col items-center justify-center h-full p-8">
          {/* TODO 로케일 */}
            <DateDisplay
                date={currentTime}
                showRelative={true}
                showDetails={true}
                showLocation={true}
            />
        </div>
    );
};

export default Home;
