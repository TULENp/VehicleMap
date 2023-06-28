import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TAppNavigation } from '../types';

export function Main() {
    const { navigate } = useNavigation<NavigationProp<TAppNavigation>>();
    return (
        <View>
            <Text>Main</Text>
            <Button title='to Settings' onPress={() => navigate('Settings')} />
            <Button title='to Vehicle' onPress={() => navigate('Vehicle')} />
        </View>
    )
}