import { View, StyleSheet, Text, useWindowDimensions, Image, StatusBar, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TAppNavigation, TRoute, TVehicle } from '../types';
import vehicles from '../data/Vehicles.json'; // array of vehicles
import { VehicleMap } from '../components/VehicleMap';
import { VehicleList } from '../components/VehicleList';
import { TabBar, TabView } from 'react-native-tab-view';
import { Filters } from '../components/Filters';
import { setCategory } from '../services';
import { useTranslation } from "react-i18next";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { globalStyles } from '../styles';
import { accent, primary, primaryButton } from '../constants/colors';

//* display vehicles map, list and filters
export function MainScreen() {
    const { t } = useTranslation(); // translation hook
    const { setOptions, navigate } = useNavigation<NavigationProp<TAppNavigation>>();

    const [vehiclesArray, setVehiclesArray] = useState<TVehicle[]>(vehicles); // array of vehicles
    const [selectedCategories, setSelectedCategories] = useState<number[]>([0, 1, 2]); // categories selected in the filter

    useEffect(() => {
        //add "Settings" button to header
        setOptions({
            headerRight: () => (
                <Pressable style={[globalStyles.button, { width: 'auto', padding: 5, margin: 'auto' }]} onPress={() => navigate('Settings')} >
                    <Text style={globalStyles.button_text}>{t('settingsHeader')}</Text>
                </Pressable>
            )
        });
    }, [])
    // filter vehiclesArray by selected categories
    function filter() {
        const categories: string[] = selectedCategories.map(id => setCategory(id)); // convert numbers to strings
        const newVehicles = vehicles.filter((item: TVehicle) => categories.includes(item.category));
        setVehiclesArray(newVehicles);
    }

    //for tabs 
    const { width } = useWindowDimensions(); // get screen width
    const [index, setIndex] = useState<number>(0); // selected tab index
    // tab routes
    //FIXME fix lang switch
    const [routes] = useState<TRoute[]>([
        { key: 'list', title: t('listTab') },
        { key: 'map', title: t('mapTab') },
    ]);

    const getTabBarIcon = (props: any) => {
        const { route } = props
        if (route.key === 'list') {
            return <Image style={{ width: 32, height: 32 }} source={require('../../assets/list.png')} />
        } else {
            return <Image style={{ width: 32, height: 32 }} source={require('../../assets/map.png')} />
        }
    }

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
        <View style={globalStyles.container}>
            <Filters selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} submit={filter} />
            <TabView
                tabBarPosition='bottom'
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: width }}
                renderTabBar={props =>
                    <TabBar {...props}
                        style={{ backgroundColor: primaryButton }}
                        indicatorStyle={{ backgroundColor: 'white' }}
                        renderIcon={props => getTabBarIcon(props)}
                        labelStyle={{ display: 'none' }}
                    />
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        height: 70,
    },
    listContainer: {
        marginBottom: 10
    }
})