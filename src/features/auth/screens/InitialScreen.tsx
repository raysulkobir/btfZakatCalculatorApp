import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';

type Props = { navigation: any };

export default function InitialScreen({ navigation }: Props) {
    useEffect(() => {
        // SplashScreen.hide();
        const id = setTimeout(() => {
            // Clear stack so user can't go back to InitialScreen
            navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
        }, 400);

        // Cleanup: if this screen unmounts before 400ms, cancel the timer
        return () => clearTimeout(id);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text style={styles.muted}>Loading…</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
    muted: { color: '#64748b' },
});
