import { useState, useEffect } from 'react';
import { GeoInfo } from '../types/geo';

export const useGeoInfo = (enabled: boolean = false) => {
    const [geoInfo, setGeoInfo] = useState<GeoInfo>({});

    useEffect(() => {
        if (enabled) {
            fetch('/api/geo')
                .then((res) => res.json())
                .then((data) => {
                    setGeoInfo({
                        country: data.country_name,
                        city: data.city,
                        timezone: data.timezone,
                    });
                })
                .catch(() => {
                    // Fallback to Intl API for timezone
                    setGeoInfo({
                        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    });
                });
        }
    }, [enabled]);

    return geoInfo;
};
