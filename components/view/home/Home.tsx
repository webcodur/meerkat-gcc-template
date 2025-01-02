'use client';

import React, { useState, useEffect } from 'react';
import { DateDisplay } from '@/components/ui/DateDisplay';
import { useTranslations } from 'next-intl';

const Home = () => {
    const t = useTranslations();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>{t('language')}</h1>
            <DateDisplay date={currentTime} />
        </div>
    );
};

export default Home;
