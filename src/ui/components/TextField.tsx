import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle } from 'react-native';
import { LightTheme as T } from '../theme/theme';

type Props = {
    label?: string;
    placeholder?: string;
    value?: string;
    onChangeText?: (t: string) => void;
    error?: string;
    style?: ViewStyle;
    secureTextEntry?: boolean;
};

export default function TextField({ label, placeholder, value, onChangeText, error, style, secureTextEntry }: Props) {
    const [focused, setFocused] = useState(false);
    return (
        <View style={[styles.wrapper, style]}>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                secureTextEntry={secureTextEntry}
                style={[styles.input, focused && styles.inputFocused, !!error && styles.inputError]}
                placeholderTextColor={T.colors.placeholder}
            />
            {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: { width: '100%' },
    label: { ...T.text.caption, color: T.colors.textSecondary, marginBottom: 6 },
    input: {
        borderWidth: 1,
        borderColor: T.colors.border,
        backgroundColor: T.colors.white,
        borderRadius: T.radius.md,
        paddingHorizontal: T.spacing.lg,
        paddingVertical: T.spacing.md,
        color: T.colors.textPrimary,
    },
    inputFocused: { borderColor: T.colors.primary },
    inputError: { borderColor: T.colors.secondary },
    error: { marginTop: 6, color: T.colors.secondary, ...T.text.caption },
});
