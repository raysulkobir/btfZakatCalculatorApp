// counter/components/CounterCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type Props = {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
    onAddAmount?: (amount: number) => void;
};

export default function CounterCard({
    value,
    onIncrement,
    onDecrement,
    onReset,
}: Props) {
    return (
        <View style={{ padding: 20, borderRadius: 16, backgroundColor: '#fff', gap: 12 }}>
            <Text style={{ fontSize: 28, fontWeight: '700', textAlign: 'center' }}>
                {value}
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                <TouchableOpacity
                    onPress={onDecrement}
                    style={{ flex: 1, padding: 12, borderRadius: 12, backgroundColor: '#eee', alignItems: 'center' }}
                >
                    <Text style={{ fontSize: 16 }}>−</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onReset}
                    style={{ flex: 1, padding: 12, borderRadius: 12, backgroundColor: '#fde68a', alignItems: 'center' }}
                >
                    <Text style={{ fontSize: 16 }}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onIncrement}
                    style={{ flex: 1, padding: 12, borderRadius: 12, backgroundColor: '#c7d2fe', alignItems: 'center' }}
                >
                    <Text style={{ fontSize: 16 }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
