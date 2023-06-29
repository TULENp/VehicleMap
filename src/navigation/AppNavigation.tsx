import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainScreen } from '../screens/MainScreen';
import { TAppNavigation } from '../types';
import { VehicleScreen } from '../screens/VehicleScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator<TAppNavigation>();

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={MainScreen} />
                <Stack.Screen name='Vehicle' component={VehicleScreen} options={{ title: 'ТС' }} />
                <Stack.Screen name='Settings' component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}