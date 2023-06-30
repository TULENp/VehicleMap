import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import React, { SetStateAction, useState } from 'react'
import { ButtonGroup } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { Marker } from 'react-native-maps';
import { accent, freightColor, passengerColor, primary, primaryButton, secondaryButton, specialColor } from '../constants/colors';

type FiltersProps = {
    selectedCategories: number[],
    setSelectedCategories: (selectedCategories: number[]) => void,
    submit: () => void
}

export function Filters({ selectedCategories, setSelectedCategories, submit }: FiltersProps) {
    //TODO add markers icon
    const { t } = useTranslation(); // translation hook

    function CategoryButton({ text, color }: { text: string, color: string }) {
        return (
            <View style={styles.catButton}>
                <View style={[styles.circle, { backgroundColor: color }]}></View>
                <Text>
                    {text}
                </Text>
            </View >
        )
    };
    return (
        <View style={styles.container}>
            <Text>{t('filters')}</Text>
            <ButtonGroup
                buttons={[t('freight'), t('passenger'), t('special')]}
                selectMultiple
                selectedIndexes={selectedCategories}
                onPress={(value) => {
                    setSelectedCategories(value);
                }}
                containerStyle={{ marginBottom: 10 }}
            />
            <Button title={t('submit')} onPress={submit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom:10

    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: "red",
    },
    catButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    buttons: {
        backgroundColor: primaryButton,
        width: 350,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 15
    },
    buttons_text: {
        fontFamily: 'MontserratAlt700',
        fontSize: 18,
        color: 'white'
    },
})