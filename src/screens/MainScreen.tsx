import { View, StyleSheet, Text, useWindowDimensions, Button } from 'react-native'
import React, { useState } from 'react'
import { TAppNavigation, TRoute, TVehicle } from '../types';
import vehicles from '../data/Vehicles.json'; // array of vehicles
import { VehicleMap } from '../components/VehicleMap';
import { VehicleList } from '../components/VehicleList';
import { TabView } from 'react-native-tab-view';
import { Filters } from '../components/Filters';
import { setCategory } from '../services';
import { useTranslation } from "react-i18next";
import { useNavigation, NavigationProp } from '@react-navigation/native';

//* display vehicles map and list
export function MainScreen() {
    const { navigate } = useNavigation<NavigationProp<TAppNavigation>>();

    const { t } = useTranslation(); // translation hook

    const [vehiclesArray, setVehiclesArray] = useState<TVehicle[]>(vehicles); // array of vehicles
    const [selectedCategories, setSelectedCategories] = useState<number[]>([0, 1, 2]); // categories selected in the filter

    // filter vehiclesArray by selected categories
    function filter() {
        const categories: string[] = selectedCategories.map(id => setCategory(id)); // convert numbers to strings
        const veh = vehicles.filter((item: TVehicle) => categories.includes(item.category));
        setVehiclesArray(veh);
    }


    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0); // selected tab index
    // tab routes
    const [routes] = useState<TRoute[]>([
        { key: 'list', title: t('listTab') },
        { key: 'map', title: t('mapTab') },
    ]);

    //scene for tabs
    const renderScene = ({ route }: { route: TRoute }) => {
        switch (route.key) {
            case 'list':
                return <VehicleList vehicles={vehiclesArray} />;
            case 'map':
                return <VehicleMap vehicles={vehiclesArray} />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <Button title={t('listTab')} onPress={() => navigate('Settings')} />
            <Filters selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} submit={filter} />
            <TabView
                tabBarPosition='bottom'
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