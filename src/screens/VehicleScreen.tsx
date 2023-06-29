import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Linking from 'expo-linking';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TAppNavigation, TVehicle } from '../types';
import MapView, { Marker } from 'react-native-maps';
import { globalStyles } from '../styles';
import { setCategoryColor } from '../services';

//* displays map, vehicle data, buttons: 'call' and 'chat' 
export function VehicleScreen() {
    const { setOptions } = useNavigation<NavigationProp<TAppNavigation>>();

    const { id, category, driver, location } = useRoute<RouteProp<TAppNavigation, 'Vehicle'>>().params.vehicle; // get vehicle from params
    setOptions({ title: 'TC #' + id });
    const text = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';
    const markerLocation = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.055,
        longitudeDelta: 0.055,
    }

    // My number is used everywhere here so you don't forget to invite me :) 
    //(And because with random numbers it would not be possible to test the chat function in Whatsapp)
    const openCallApp = () => Linking.openURL(`tel:${driver.number}`);
    const openWhatsApp = () => Linking.openURL(`http://api.whatsapp.com/send?phone=${driver.number}&text=${text}`);


    return (
        <View style={globalStyles.container}>
            <MapView
                initialRegion={markerLocation}
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