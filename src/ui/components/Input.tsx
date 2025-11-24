// ui/components/Input.tsx
import React, { forwardRef, useMemo, useState } from 'react';
import {
    TextInput,
    TextInputProps,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    Image,
} from 'react-native';
import { Colors } from '@/ui/theme/colors';
import { getProportionalFontSize } from '@/ui/theme/typography';
import { images } from '@/utils/images';

type Props = TextInputProps & {
    label?: string;
    helperText?: string;
    errorText?: string;

    /** Password field (shows eye toggle if rightIcon not provided) */
    isPassword?: boolean;

    /** Optional icons */
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    rightIconHitSlop?: { top: number; bottom: number; left: number; right: number };
    onPressRightIcon?: () => void;

    /** Style overrides */
    containerStyle?: ViewStyle;
    inputWrapperStyle?: ViewStyle;
    inputStyle?: TextStyle;
    labelStyle?: TextStyle;
    helperStyle?: TextStyle;
    errorStyle?: TextStyle;
};

const Input = forwardRef<TextInput, Props>(function Input(
    {
        label,
        helperText,
        errorText,

        isPassword = false,

        leftIcon,
        rightIcon,
        rightIconHitSlop = { top: 6, bottom: 6, left: 6, right: 6 },
        onPressRightIcon,

        containerStyle,
        inputWrapperStyle,
        inputStyle,
        labelStyle,
        helperStyle,
        errorStyle,

        secureTextEntry, // allow override but we’ll manage if isPassword = true
        placeholderTextColor = Colors.placeholder_grey,

        ...rest
    },
    ref
) {
    const [secure, setSecure] = useState<boolean>(isPassword || !!secureTextEntry);
    const [focused, setFocused] = useState(false);

    const wrapperBorderColor = useMemo(() => {
        if (errorText) return Colors.secondary;
        return focused ? Colors.primary : Colors.border_grey;
    }, [focused, errorText]);

    const renderRight = () => {
        if (rightIcon) {
            return (
                <TouchableOpacity
                    onPress={onPressRightIcon}
                    disabled={!onPressRightIcon}
                    hitSlop={rightIconHitSlop}
                    style={styles.iconRight}
                >
                    {rightIcon}
                </TouchableOpacity>
            );
        }
        if (isPassword) {
            return (
                <TouchableOpacity
                    onPress={() => setSecure(s => !s)}
                    hitSlop={rightIconHitSlop}
                    style={styles.iconRight}
                    accessibilityRole="button"
                    accessibilityLabel={secure ? 'Show password' : 'Hide password'}
                >
                    Put your own eye icons here if you want images:
                    <Image source={secure ? images.eyeClosed : images.eyeOpen} />
                </TouchableOpacity>
            );
        }
        return null;
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

            <View
                style={[
                    styles.inputWrapper,
                    { borderColor: wrapperBorderColor },
                    inputWrapperStyle,
                ]}
            >
                {!!leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

                <TextInput
                    ref={ref}
                    style={[styles.input, inputStyle]}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={isPassword ? secure : secureTextEntry}
                    onFocus={(e) => {
                        setFocused(true);
                        rest.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setFocused(false);
                        rest.onBlur?.(e);
                    }}
                    {...rest}
                />

                {renderRight()}
            </View>

            {!!helperText && !errorText && (
                <Text style={[styles.helper, helperStyle]}>{helperText}</Text>
            )}

            {!!errorText && (
                <Text style={[styles.error, errorStyle]}>{errorText}</Text>
            )}
        </View>
    );
});

export default Input;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 8,
    },
    label: {
        fontSize: getProportionalFontSize(13),
        color: Colors.dark_grey,
        marginBottom: 6,
        fontWeight: '600',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: Colors.white,
        minHeight: 55,
        position: 'relative', 
    },
    input: {
        flex: 1,
        fontSize: getProportionalFontSize(14),
        color: Colors.black,
    },
    iconLeft: {
        marginRight: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconRight: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    helper: {
        marginTop: 6,
        fontSize: getProportionalFontSize(12),
        color: Colors.grey,
    },
    error: {
        marginTop: 6,
        fontSize: getProportionalFontSize(12),
        color: Colors.secondary,
        fontWeight: '600',
    },
    toggleText: {
        fontSize: getProportionalFontSize(12),
        color: Colors.primary,
        fontWeight: '600',
    },
});
