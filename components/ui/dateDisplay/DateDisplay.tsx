import { useGeoInfo } from '@/hooks/useGeoInfo';
import { formatDateTime } from '@/utils/date';
import { styles } from './styles';

export interface DateDisplayProps {
    date: Date | string | number;
    showRelative?: boolean;
    className?: string;
    showDetails?: boolean;
    showLocation?: boolean;
}

export function DateDisplay({
    date,
    showRelative = false,
    className = '',
    showDetails = false,
    showLocation = false,
}: DateDisplayProps) {
    const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
    const geoInfo = useGeoInfo(showLocation);
    const { date: dateText, time } = formatDateTime(dateObj, { showDetails, showRelative });

    return (
        <time 
            dateTime={dateObj.toISOString()}
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
