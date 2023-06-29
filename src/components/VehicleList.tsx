import { FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { TAppNavigation, TVehicle } from '../types';
import { VehicleCard } from './VehicleCard';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export function VehicleList({ vehicles }: { vehicles: TVehicle[] }) {
    const { navigate } = useNavigation<NavigationProp<TAppNavigation>>();

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