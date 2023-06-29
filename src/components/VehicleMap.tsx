import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { initLocation } from '../constants/Location'
import { TTabNavigation, TVehicle } from '../types'
import { useRoute, RouteProp } from '@react-navigation/native'


export function VehicleMap({ vehicles }: { vehicles: TVehicle[] }) {

    const vehiclesMarkers: JSX.Element[] = vehicles.map((item: TVehicle) =>
        <Marker
            key={item.id}
            coordinate={{
                latitude: item.location.latitude,
                longitude: item.location.longitude
            }} />
    );

    return (
        <MapView
            style={{ width: '100%', height: '80%' }}
            initialRegion={initLocation}>
            {vehiclesMarkers}
        </MapView>
    )
}