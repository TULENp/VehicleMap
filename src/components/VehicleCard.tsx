import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TVehicle } from '../types'

export function VehicleCard({ vehicle }: { vehicle: TVehicle }) {

    return (
        <View style={styles.container}>
            <Text>TC #{vehicle.id}</Text>
            <Text>{vehicle.driver.name}</Text>
            <Text>{vehicle.category}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        padding: 10,
        backgroundColor:'white'
    }
})