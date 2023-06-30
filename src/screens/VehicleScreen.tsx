import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Linking from 'expo-linking';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TAppNavigation, TVehicle } from '../types';
import MapView, { Marker } from 'react-native-maps';
import { globalStyles } from '../styles';
import { setCategoryColor } from '../services';
import { useTranslation } from 'react-i18next';

//* displays map, vehicle data, buttons: 'call' and 'chat'
export function VehicleScreen() {
    const { t } = useTranslation(); // translation hook
    const { setOptions } = useNavigation<NavigationProp<TAppNavigation>>();
    const { id, category, driver, location } = useRoute<RouteProp<TAppNavigation, 'Vehicle'>>().params.vehicle; // get vehicle from params
    useEffect(() => {
        setOptions({ title: `${t('vehicleHeader')}${id}. ${category}` }); // set nav header
    }, [])


    //text template for chat message
    const chatText = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';
    const markerLocation = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.055,
        longitudeDelta: 0.055,
    }

    // My number is used everywhere here so you don't forget to invite me :)
    //(And because with random numbers it would not be possible to test the chat function in Whatsapp)
    const openCallApp = () => Linking.openURL(`tel:${driver.number}`);
    const openWhatsApp = () => Linking.openURL(`http://api.whatsapp.com/send?phone=${driver.number}&text=${chatText}`);


    return (
        <View style={globalStyles.container}>
            <MapView
                initialRegion={markerLocation}
                style={{ width: '100%', height: '70%' }}>
                <Marker
                    pinColor={setCategoryColor(category)}
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude
                    }} />
            </MapView>
            <View style={styles.container}>
                <Text style={styles.name}>{driver.name}</Text>
                <Text style={styles.text}>{driver.number}</Text>
                <View style={styles.buttonContainer}>
                    <Pressable style={[globalStyles.button, { width: '45%' }]} onPress={openCallApp}>
                        <Text style={[globalStyles.button_text, { fontSize: 25 }]}>{t('call')}</Text>
                    </Pressable>
                    <Pressable style={[globalStyles.button, { width: '45%' }]} onPress={openWhatsApp}>
                        <Text style={[globalStyles.button_text, { fontSize: 25 }]}>{t('chat')}</Text>
                    </Pressable>

                </View>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
    },
    button: {
        width: '30%',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    text: {
        fontSize: 30,
    },
})
