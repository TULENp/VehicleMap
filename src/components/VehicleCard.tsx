import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TVehicle } from '../types'
import { accent, secondary, secondaryButton } from '../constants/colors'

export function VehicleCard({ vehicle }: { vehicle: TVehicle }) {

    return (
        <View style={styles.container}>
            <View style={styles.vehicle}>
                <Text >TC #{vehicle.id}</Text>
            </View>
            <View style={styles.info}>
                <View>
                    <Text>{vehicle.driver.name}</Text>
                    <Text>{vehicle.category}</Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: secondaryButton,
        display: 'flex',
        flexDirection: 'row',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    vehicle: {
        width: '20%',

    }
})

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: secondary,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#000',

    },
    input: {
        backgroundColor: secondary,
        borderWidth: 1,
        borderColor: accent,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: '#000',
    },
    authorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: accent,
    },
    author: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'MontserratAlt500'

    },
    emptyList: {
        fontSize: 16,
        color: accent,
        alignSelf: 'center',
    }
})