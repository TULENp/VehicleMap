import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TVehicle } from '../types'
import { accent, secondary, secondaryButton } from '../constants/colors'

//* display vehicle card (list item)
export function VehicleCard({ vehicle }: { vehicle: TVehicle }) {
    return (
        <View style={styles.container}>
            <Text style={styles.vehicle} >TC #{vehicle.id}</Text>
            <View>
                    <Text style={styles.driverName}>{vehicle.driver.name}</Text>
                    <Text>{vehicle.category}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
        padding: 10,
        backgroundColor: secondaryButton,
        display: 'flex',
        flexDirection: 'row',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vehicle: {
        width: '20%',
        fontSize: 20,
        alignSelf: 'center',
    },
    driverName: {
        fontSize: 20,
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