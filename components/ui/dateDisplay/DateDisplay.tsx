import { useGeoInfo } from '@/hooks/useGeoInfo';
import { formatDateTime } from '@/utils/date';
import { styles } from './styles';
import { useEffect, useState } from 'react';

export interface DateDisplayProps {
    date: Date | string | number;
    showRelative?: boolean;
    className?: string;
    showDetails?: boolean;
    showLocation?: boolean;
    updateInterval?: number; // 업데이트 간격 (ms), 기본값 1초
}

export function DateDisplay({
    date,
    showRelative = false,
    className = '',
    showDetails = false,
    showLocation = false,
    updateInterval = 1000,
}: DateDisplayProps) {
    const initialDate = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
    const [currentDate, setCurrentDate] = useState(initialDate);
    const geoInfo = useGeoInfo(showLocation);
    const { date: dateText, time } = formatDateTime(currentDate, { showDetails, showRelative });

    useEffect(() => {
        // 실시간 업데이트를 위한 타이머 설정
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, updateInterval);

        // 컴포넌트 언마운트 시 타이머 정리
        return () => clearInterval(timer);
    }, [updateInterval]);

    return (
        <time 
            dateTime={currentDate.toISOString()}
            className={`${styles.base} ${className}`}
        >
            {showLocation && (geoInfo.city || geoInfo.country || geoInfo.timezone) && (
                <div className={styles.location}>
                    {[geoInfo.country, geoInfo.city].filter(Boolean).join(', ')}
                    {geoInfo.timezone && ` (${geoInfo.timezone})`}
                </div>
            )}
            <div className={styles.timeContainer}>
                <span className={styles.date}>{dateText}</span>
                {time && <span className={styles.time}>{time}</span>}
            </div>
        </time>
    );
}
