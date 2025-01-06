'use client';

// import React, { useState, useEffect } from 'react';
// import { DateDisplay } from '@/components/ui/dateDisplay/DateDisplay';
import CarvedText from '@/components/ui/CarvedText';

const Home = () => {
    // const [currentTime, setCurrentTime] = useState(new Date());

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrentTime(new Date());
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, []);

    return (
        <div className="flex flex-col w-full h-full p-8">
            <CarvedText>7MEERKAT</CarvedText>

            {/* <div className="flex justify-center mb-8">
                <DateDisplay
                    date={currentTime}
                    showRelative={true}
                    showDetails={true}
                    showLocation={true}
                />
            </div> */}
            
        </div>
    );
};

export default Home;
