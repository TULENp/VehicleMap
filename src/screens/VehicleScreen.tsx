import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Linking from 'expo-linking';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TAppNavigation, TVehicle } from '../types';
import MapView, { Marker } from 'react-native-maps';
import { initLocation } from '../constants/Location';
import { globalStyles } from '../styles';
import { setCategoryColor } from '../services';


export function VehicleScreen() {
    const { id, category, driver, location } = useRoute<RouteProp<TAppNavigation, 'Vehicle'>>().params.vehicle; // get vehicle from params
    const text = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';

    function openCallApp() {
        Linking.openURL('tel:' + driver.number);
    }

    function openWhatsApp() {
        Linking.openURL(`http://api.whatsapp.com/send?phone=${driver.number}&text=${text}`)
    }

    return (
        <View style={globalStyles.container}>
            <MapView
                initialRegion={initLocation}
                style={{ width: '100%', height: '80%' }}>
                <Marker
                    pinColor={setCategoryColor(category)}
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
                <Button title='Позвонить' onPress={openCallApp} />
                <Button title='Написать' onPress={openWhatsApp} />
            </View>

        </View >
    )
}