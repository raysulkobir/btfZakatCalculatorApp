// ui/components/CommonButton.tsx
import React, { memo, useMemo } from 'react';
import {
    Text,
    ActivityIndicator,
    Pressable,
    ViewStyle,
    TextStyle,
    GestureResponderEvent,
    StyleSheet,
    View,
    StyleProp,
} from 'react-native';
import { Colors } from '@/ui/theme/colors';
import { getProportionalFontSize } from '@/ui/theme/typography';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type Props = {
    title: string;
    onPress?: (e: GestureResponderEvent) => void;
    loading?: boolean;
    disabled?: boolean;

    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;

    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;

    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;

    // Optional overrides
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;

    // NEW: hover/pressed overrides
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    hoverBorderColor?: string;

    pressedBackgroundColor?: string;
    pressedTextColor?: string;
    pressedBorderColor?: string;

    testID?: string;
    accessibilityLabel?: string;
};

const SIZE_MAP: Record<Size, { padV: number; font: number; radius: number }> = {
    sm: { padV: 10, font: 14, radius: 8 },
    md: { padV: 14, font: 16, radius: 10 },
    lg: { padV: 16, font: 18, radius: 12 },
};

const CommonButton = memo(function CommonButton({
    title,
    onPress,
    loading = false,
    disabled = false,
    variant = 'primary',
    size = 'md',
    fullWidth = true,
    leftIcon,
    rightIcon,
    style,
    textStyle,
    textColor,
    backgroundColor,
    borderColor,

    hoverBackgroundColor,
    hoverTextColor,
    hoverBorderColor,

    pressedBackgroundColor,
    pressedTextColor,
    pressedBorderColor,

    testID,
    accessibilityLabel,
}: Props) {
    const sz = SIZE_MAP[size];

    // Base (non-interactive) styles computed once
    const baseContainer = useMemo((): ViewStyle => {
        const base: ViewStyle = {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: sz.radius,
            paddingVertical: sz.padV,
            paddingHorizontal: 16,
            flexDirection: 'row',
            width: fullWidth ? '90%' : undefined,
            borderStyle: 'solid',
            marginTop: 12,
        };

        if (variant === 'primary') {
            base.backgroundColor = backgroundColor || Colors.primary;
            base.borderWidth = 1;
            base.borderColor = borderColor || Colors.primary;
        } else if (variant === 'outline') {
            base.backgroundColor = 'transparent';
            base.borderWidth = 1;
            base.borderColor = borderColor || Colors.primary;
        } else {
            // ghost
            base.backgroundColor = 'transparent';
            base.borderWidth = 0;
            base.borderColor = 'transparent';
        }

        return base;
    }, [variant, size, fullWidth, backgroundColor, borderColor, sz.radius, sz.padV]);

    const baseLabel = useMemo((): TextStyle => {
        return {
            fontWeight: '700',
            fontSize: getProportionalFontSize(sz.font),
            color: textColor ?? (variant === 'primary' ? Colors.white : Colors.primary),
            textAlign: 'center',
        };
    }, [textColor, variant, sz.font]);

    // Effective colors helpers (apply hovered/pressed overrides when present)
    const computeInteractiveStyles = (
        hovered: boolean,
        pressed: boolean
    ): { container: ViewStyle; label: TextStyle } => {
        const container: ViewStyle = {};
        const label: TextStyle = {};

        // Background
        if (hovered && hoverBackgroundColor) {
            container.backgroundColor = hoverBackgroundColor;
        }
        if (pressed && pressedBackgroundColor) {
            container.backgroundColor = pressedBackgroundColor;
            // subtle feedback
            container.transform = [{ scale: 0.99 }];
        }

        // Border
        if (hovered && hoverBorderColor) {
            container.borderColor = hoverBorderColor;
        }
        if (pressed && pressedBorderColor) {
            container.borderColor = pressedBorderColor;
        }

        // Text color
        if (hovered && hoverTextColor) {
            label.color = hoverTextColor;
        }
        if (pressed && pressedTextColor) {
            label.color = pressedTextColor;
        }

        return { container, label };
    };

    return (
        <Pressable
            disabled={disabled || loading}
            onPress={onPress}
            testID={testID}
            accessibilityRole="button"
            accessibilityState={{ disabled: disabled || loading, busy: loading }}
            accessibilityLabel={accessibilityLabel || title}
            hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
            style={({ hovered, pressed }) => {
                const interactive = computeInteractiveStyles(!!hovered, !!pressed);
                return [baseContainer, style, disabled && { opacity: 0.6 }, interactive.container] as StyleProp<ViewStyle>;
            }}
        >
            {({ hovered, pressed }) => {
                const interactive = computeInteractiveStyles(!!hovered, !!pressed);

                return (
                    <>
                        {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}

                        {loading ? (
                            <ActivityIndicator
                                size="small"
                                color={
                                    (interactive.label.color as string) ??
                                    (variant === 'primary' ? Colors.white : Colors.primary)
                                }
                            />
                        ) : (
                            <Text style={[baseLabel, textStyle, interactive.label]} numberOfLines={1}>
                                {title}
                            </Text>
                        )}

                        {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
                    </>
                );
            }}
        </Pressable>
    );
});

const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
    },
});

export default CommonButton;
