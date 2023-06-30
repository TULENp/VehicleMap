import { FlatList, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { TAppNavigation, TVehicle } from '../types';
import { VehicleCard } from './VehicleCard';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export function VehicleList({ vehicles }: { vehicles: TVehicle[] }) {
    const { navigate } = useNavigation<NavigationProp<TAppNavigation>>();
    const { t } = useTranslation(); // translation hook

    return (
        <FlatList
            ListEmptyComponent={<Text style={{ alignSelf: 'center' }}>{t('emptyList')}</Text>}
            data={vehicles}
            renderItem={({ item }) =>
                <Pressable onPress={() => navigate('Vehicle', { vehicle: item })}>
                    <VehicleCard key={item.id} vehicle={item} />
                </Pressable>
            }
        />
    )
}
