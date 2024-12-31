import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export interface DateDisplayProps {
    date: Date | string | number;
    format?: string;
    showRelative?: boolean;
}

export function DateDisplay({
    date,
    format: formatStr = 'yyyy-MM-dd HH:mm:ss',
    showRelative = false,
}: DateDisplayProps) {
    const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

    if (showRelative) {
        return (
            <time
                dateTime={dateObj.toISOString()}
                title={format(dateObj, formatStr, { locale: ko })}
            >
                {formatDistanceToNow(dateObj, { addSuffix: true, locale: ko })}
            </time>
        );
    }

    return (
        <time dateTime={dateObj.toISOString()}>
            {format(dateObj, formatStr, { locale: ko })}
        </time>
    );
}
