'use client';

import React, { useState, useEffect } from 'react';
import { DateDisplay } from '@/components/ui/DateDisplay';

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <DateDisplay date={currentTime} />
        </div>
    );
};

export default Home;
