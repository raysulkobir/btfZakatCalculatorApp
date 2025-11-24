// counter/screens/CounterScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CounterCard from '../components/CounterCard';
import { decrement, increment, reset, selectCounterValue } from '../state/counterSlice';
import type { AppDispatch, RootState } from '../../../store'; // ⬅️ adjust path if needed



export default function CounterScreen() {
    const value = useSelector(selectCounterValue);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <View style={{ flex: 1, padding: 16, justifyContent: 'center', backgroundColor: '#f8fafc' }}>
            <Text style={{ fontSize: 22, fontWeight: '600', textAlign: 'center', marginBottom: 16 }}>
                Counter
            </Text>

            <CounterCard
                value={value}
                onIncrement={() => dispatch(increment())}
                onDecrement={() => dispatch(decrement())}
                onReset={() => dispatch(reset())}
            />
        </View>
    );
}
