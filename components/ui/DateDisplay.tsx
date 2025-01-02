import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect, useState } from 'react';

interface GeoInfo {
    country?: string;
    city?: string;
    timezone?: string;
}

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
    const [geoInfo, setGeoInfo] = useState<GeoInfo>({});
    
    useEffect(() => {
        if (showLocation) {
            fetch('https://ipapi.co/json/')
                .then(res => res.json())
                .then(data => {
                    setGeoInfo({
                        country: data.country_name,
                        city: data.city,
                        timezone: data.timezone
                    });
                })
                .catch(() => {
                    // Fallback to Intl API for timezone
                    setGeoInfo({
                        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                    });
                });
        }
    }, [showLocation]);

    // 메탈릭 디스플레이 스타일 정의
    const baseStyle = `
        inline-flex flex-col rounded-lg
        bg-gradient-to-b from-gray-800 to-gray-900
        border border-gray-600
        shadow-sm
        overflow-hidden
        min-w-[300px]
    `;

    const locationStyle = `
        w-full px-4 py-2.5
        bg-gradient-to-b from-gray-700 to-gray-800
        text-gray-200 text-center
        font-sans font-medium text-base
        border-b border-gray-600
    `;

    const timeContainerStyle = `
        flex flex-col items-center gap-2 px-4 py-3
        bg-gradient-to-b from-gray-700 to-gray-800
        w-full
    `;

    const dateStyle = `
        w-[260px] px-3 py-1.5 rounded-md text-center
        bg-gradient-to-b from-gray-200 to-gray-100
        text-gray-800
        font-sans font-medium text-sm
        border border-gray-300
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]
    `;

    const timeStyle = `
        w-[260px] px-5 py-2.5 rounded-md text-center
        bg-gradient-to-b from-slate-100 via-white to-slate-200
        text-gray-800
        font-sans font-bold text-3xl
        border border-gray-300
        shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_1px_1px_rgba(0,0,0,0.1)]
    `;

    // 날짜/시간 텍스트 생성
    const getDateTimeTexts = () => {
        if (showDetails) {
            return {
                date: format(dateObj, 'yyyy년 MM월 dd일 (EEEE)', { locale: ko }),
                time: format(dateObj, 'HH:mm:ss', { locale: ko })
            };
        }
        
        if (showRelative) {
            return {
                date: formatDistanceToNow(dateObj, { addSuffix: true, locale: ko }),
                time: ''
            };
        }

        return {
            date: format(dateObj, 'yyyy.MM.dd (EEEE)', { locale: ko }),
            time: format(dateObj, 'HH:mm:ss', { locale: ko })
        };
    };

    const { date: dateText, time } = getDateTimeTexts();

    return (
        <time 
            dateTime={dateObj.toISOString()}
            className={`${baseStyle} ${className}`}
        >
            {showLocation && (geoInfo.city || geoInfo.country || geoInfo.timezone) && (
                <div className={locationStyle}>
                    {[geoInfo.country, geoInfo.city].filter(Boolean).join(', ')}
                    {geoInfo.timezone && ` (${geoInfo.timezone})`}
                </div>
            )}
            <div className={timeContainerStyle}>
                <span className={dateStyle}>{dateText}</span>
                {time && <span className={timeStyle}>{time}</span>}
            </div>
        </time>
    );
}
