import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Main } from '../screens/Main';
import { TAppNavigation } from '../types';
import Vehicle from '../screens/Vehicle';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator<TAppNavigation>();

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={Main} />
                <Stack.Screen name='Vehicle' component={Vehicle} />
                <Stack.Screen name='Settings' component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}