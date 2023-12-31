import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { initLocation } from '../constants/Location'
import { TAppNavigation, TVehicle } from '../types'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { setCategoryColor } from '../services'

//* display map with marked vehicles
export function VehicleMap({ vehicles }: { vehicles: TVehicle[] }) {
    const { navigate } = useNavigation<NavigationProp<TAppNavigation>>();

    // list of markers components with vehicle data
    const vehiclesMarkers: JSX.Element[] = vehicles.map((item: TVehicle) =>
        <Marker
            key={item.id}
            title={'ТС #' + item.id}
            description={item.driver.name}
            pinColor={setCategoryColor(item.category)}
            onCalloutPress={() => navigate('Vehicle', { vehicle: item })}
            coordinate={{
                latitude: item.location.latitude,
                longitude: item.location.longitude
            }} />
    );

    return (
        // map view - google map api
        <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={initLocation}>
            {vehiclesMarkers}
        </MapView>
    )
}