import React from 'react';
import { View, TextInput, Button } from 'react-native';

type Props = {
    value: string;
    onChange: (t: string) => void;
    onSubmit: () => void;
};

export default function TodoInput({ value, onChange, onSubmit }: Props) {
    return (
        <View style={{ flexDirection: 'row', gap: 8 }}>
            <TextInput
                value={value}
                onChangeText={onChange}
                placeholder="Add a task..."
                style={{ borderWidth: 1, flex: 1, padding: 10, borderRadius: 8 }}
                returnKeyType="done"
                onSubmitEditing={onSubmit}
            />
            <Button title="Add" onPress={onSubmit} />
        </View>
    );
}
