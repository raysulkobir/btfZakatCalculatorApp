import React from 'react';
import { Pressable, View, Text, Image, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import { images } from '@/utils/images'
import { Colors } from '@/ui/theme/colors'
import Fonts from '@/ui/theme/fonts'
import { getProportionalFontSize } from '@/ui/theme/typography'
import { Typography } from '@/ui/theme/typography';

type Props = {
    title: string;
    subtitle?: string;
    icon: ImageSourcePropType;
    onPress?: () => void;
    style?: ViewStyle;
};

export default function Card({ title, subtitle, icon, onPress, style }: Props) {
    console.log("icon", icon, 'images.guide', images.guide);
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.card, style, pressed && styles.cardPressed]}
            android_ripple={{ color: '#e9eef1' }}
            accessibilityRole="button"
            accessibilityLabel={subtitle ? `${title}. ${subtitle}` : title}
        >
            <Image source={icon} style={styles.icon} />
            <View style={{ alignItems: 'center' }}>
                <Text style={Typography.subtitle}>{title}</Text>
                {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '48%',                 // 2 per row with space-between
        borderRadius: 16,
        backgroundColor: Colors.white,
        paddingVertical: 18,
        alignItems: 'center',
        marginVertical: 8,
        // soft shadow
        shadowColor: Colors.border_grey, shadowOpacity: 0.6, shadowRadius: 8, shadowOffset: { width: 0, height: 4 },
        elevation: 5,
    },
    cardPressed: { transform: [{ scale: 0.997 }] },
    icon: { width: 44, height: 44, resizeMode: 'contain', marginBottom: 10, tintColor: '#0f6a58' },
    title: { fontSize: getProportionalFontSize(16), fontFamily: Fonts.font_600, color: '#1f2937', textAlign: 'center' },
    subtitle: { marginTop: 4, fontSize: 12, color: '#6B7280', textAlign: 'center' },
});
