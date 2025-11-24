import React from 'react';
import { Pressable, Text, View } from 'react-native';

type Props = {
    title: string;
    done: boolean;
    onToggle: () => void;
    onDelete: () => void;
};

export default function TodoItem({ title, done, onToggle, onDelete }: Props) {
    return (
        <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Pressable onPress={onToggle} style={{ marginRight: 10 }}>
                <Text style={{ fontSize: 18 }}>{done ? '✅' : '⬜️'}</Text>
            </Pressable>
            <Text
                onPress={onToggle}
                style={{ flex: 1, fontSize: 16, textDecorationLine: done ? 'line-through' : 'none' }}
            >
                {title}
            </Text>
            <Pressable onPress={onDelete}>
                <Text style={{ fontSize: 16 }}>🗑️</Text>
            </Pressable>
        </View>
    );
}
