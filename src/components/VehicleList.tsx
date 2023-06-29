import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps';
import { TAppNavigation, TTabNavigation, TVehicle } from '../types';
import { VehicleCard } from './VehicleCard';
import { useNavigation, NavigationProp, RouteProp, useRoute } from '@react-navigation/native';

export function VehicleList({ vehicles }: { vehicles: TVehicle[] }) {
    const { navigate } = useNavigation<NavigationProp<TAppNavigation>>();

    const vehiclesMarkers: JSX.Element[] = vehicles.map((item: TVehicle) =>
        <Marker
            key={item.id}
            coordinate={{
                latitude: item.location.latitude,
                longitude: item.location.longitude
            }} />
    );

    return (
        <FlatList
            style={styles.listContainer}
            data={vehicles}
            renderItem={({ item }) =>
                <Pressable onPress={() => navigate('Vehicle', { vehicle: item })}>
                    <VehicleCard key={item.id} vehicle={item} />
                </Pressable>
            }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        padding: 10
    },
    listContainer: {
        marginBottom: 10
    }
})