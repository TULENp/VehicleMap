import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TAppNavigation } from '../types';
import MapView, { Marker } from 'react-native-maps';

export function Main() {
    const { navigate } = useNavigation<NavigationProp<TAppNavigation>>();

    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    return (
        <View>
            <Text>Main</Text>
            {/* Map  */}
                <MapView
                    style={{ width: '100%', height: '80%' }}
                    initialRegion={region}>
                    <Marker
                        title='hello'
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }} />
                </MapView>
                <Button title='to Settings' onPress={() => navigate('Settings')} />
                <Button title='to Vehicle' onPress={() => navigate('Vehicle')} />
        </View>
    )
}