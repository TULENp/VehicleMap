import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { TAppNavigation, TVehicle } from '../types';
import MapView, { Marker } from 'react-native-maps';
import { initLocation } from '../constants/Location';
import { globalStyles } from '../styles';


export function VehicleScreen() {
    const { id, category, driver, location } = useRoute<RouteProp<TAppNavigation, 'Vehicle'>>().params.vehicle; // get vehicle from params

    return (
        <View style={globalStyles.container}>
            <MapView
                initialRegion={initLocation}
                style={{ width: '100%', height: '80%' }}>
                <Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude
                    }} />
            </MapView>
            <View>
                <Text>{category}</Text>

                <Text>{driver.name}</Text>
                <Text>{driver.number}</Text>
            </View>
            <View>
                <Pressable>
                    <Text>Позвонить</Text>
                </Pressable>
                <Pressable>
                    <Text>Написать</Text>
                </Pressable>
            </View>

        </View >
    )
}