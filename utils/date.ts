import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

interface DateTimeTexts {
    date: string;
    time: string;
}

export const formatDateTime = (
    date: Date | string | number,
    options: {
        showDetails?: boolean;
        showRelative?: boolean;
    } = {}
): DateTimeTexts => {
    const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
    const { showDetails = false, showRelative = false } = options;

    if (showDetails) {
        return {
            date: format(dateObj, 'yyyy년 MM월 dd일 (EEEE)', { locale: ko }),
            time: format(dateObj, 'HH:mm:ss', { locale: ko }),
        };
    }

    if (showRelative) {
        return {
            date: formatDistanceToNow(dateObj, { addSuffix: true, locale: ko }),
            time: '',
        };
    }

    return {
        date: format(dateObj, 'yyyy.MM.dd (EEEE)', { locale: ko }),
        time: format(dateObj, 'HH:mm:ss', { locale: ko }),
    };
};
