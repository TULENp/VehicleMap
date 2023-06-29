import { View, Text, Button, StyleSheet, FlatList, Pressable, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TAppNavigation, TRoute, TVehicle } from '../types';
import MapView, { Marker } from 'react-native-maps';
import vehicles from '../data/Vehicles.json'; // array of vehicles
import { VehicleCard } from '../components/VehicleCard';
import { VehicleMap } from '../components/VehicleMap';
import { VehicleList } from '../components/VehicleList';
import { TabView } from 'react-native-tab-view';

const renderScene = ({ route }: { route: TRoute }) => {
    switch (route.key) {
        case 'list':
            return <VehicleList vehicles={vehicles} />;
        case 'map':
            return <VehicleMap vehicles={vehicles} />;
        default:
            return null;
    }
};

export function MainScreen() {
    const { navigate } = useNavigation<NavigationProp<TAppNavigation>>();

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState<TRoute[]>([
        { key: 'list', title: 'List' },
        { key: 'map', title: 'Map' },
    ]);

    return (
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>
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