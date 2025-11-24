import React, { useMemo } from 'react';
import { Text } from 'react-native';

export function TodayDate({ style }: { style?: any }) {
    const dateStr = useMemo(() => {
        return new Intl.DateTimeFormat('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'Asia/Dhaka',  // ensure Dhaka time
        }).format(new Date());
    }, []);

    return <Text style={style}>{dateStr}</Text>;
}
