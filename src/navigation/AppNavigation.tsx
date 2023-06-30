import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainScreen } from '../screens/MainScreen';
import { TAppNavigation } from '../types';
import { VehicleScreen } from '../screens/VehicleScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useTranslation } from 'react-i18next';
import { globalStyles } from '../styles';

const Stack = createNativeStackNavigator<TAppNavigation>();

export function AppNavigation() {
    const { t } = useTranslation(); // translation hook

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Main' component={MainScreen} options={{
                    title: t('mainHeader')
                }} />
                <Stack.Screen name='Vehicle' component={VehicleScreen} options={{ title: t('vehicleHeader') }} />
                <Stack.Screen name='Settings' component={SettingsScreen} options={{ title: t('settingsHeader') }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}