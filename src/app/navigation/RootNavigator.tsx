import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../../features/home/screens/HomeScreen';
// import LoginScreen from '../../features/auth/screens/LoginScreen';
// import TodoScreen from '../../features/todo/screens/TodoScreen';
// import CounterScreen from '../../features/counter/screens/CounterScreen';
import InitialScreen from '../../features/auth/screens/InitialScreen';
import HomeScreen from '../../features/home/screens/HomeScreen';
import LoginScreen from '@/features/auth/screens/LoginScreen';
import { Colors } from '@/ui/theme/colors';
import ZakatCalculatorScreen from '../../features/zakatCalculator/screens/ZakatCalculatorScreen';
import PaysZalatScreen from '@/features/paysZakat/screens/PaysZalatScreen';
import GuideScreen from '@/features/guide/screens/GuideScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="InitialScreen"
        >
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
                name="guide"
                component={GuideScreen}
                options={{
                    headerShown: false,
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.primary },
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="paysZakat"
                component={PaysZalatScreen}
                options={{
                    headerShown: true,
                    title: 'About Zakat',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.primary },
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="ZakatCalculator"
                component={ZakatCalculatorScreen}
                options={{
                    headerShown: true,
                    title: 'About Zakat',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.primary },
                    headerTintColor: '#fff',
                }}
            />
            {/* <Stack.Screen name="Todo" component={TodoScreen} /> */}
            {/* <Stack.Screen name="Counter" component={CounterScreen} /> */}
        </Stack.Navigator>
    );
}
