import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TAppNavigation, TVehicle } from '../types';
import MapView, { Marker } from 'react-native-maps';
import vehicles from '../data/Vehicles.json'; // array of vehicles

export function Main() {
    const { navigate } = useNavigation<NavigationProp<TAppNavigation>>();

    const region = {
        latitude: 55.796127,
        longitude: 49.106405,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const markers: JSX.Element[] = vehicles.map((item: TVehicle) =>
        <Marker
            key={item.id}
            title={item.name}
            coordinate={{
                latitude: item.location.latitude,
                longitude: item.location.longitude
            }} />
    );

    return (
        <View style={styles.container}>
            <Text>Main</Text>
            {/* Map  */}
            <MapView
                style={{ width: '100%', height: '80%' }}
                initialRegion={region}>
                {markers}
            </MapView>

            <Button title='to Settings' onPress={() => navigate('Settings')} />
            <Button title='to Vehicle' onPress={() => navigate('Vehicle')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})