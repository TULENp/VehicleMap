import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {  } from 'react'
import { ButtonGroup } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { primaryButton } from '../constants/colors';
import { globalStyles } from '../styles';

type FiltersProps = {
    selectedCategories: number[],
    setSelectedCategories: (selectedCategories: number[]) => void,
    submit: () => void
}

//* display filters and change filters state
export function Filters({ selectedCategories, setSelectedCategories, submit }: FiltersProps) {
    //TODO add markers icon
    const { t } = useTranslation(); // translation hook

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>{t('filters')}</Text>
            <ButtonGroup
                buttons={[t('freight'), t('passenger'), t('special')]}
                textStyle={{ fontWeight: 'bold' }}
                selectedButtonStyle={{ backgroundColor: primaryButton }}
                selectMultiple
                selectedIndexes={selectedCategories}
                onPress={(value) => {
                    setSelectedCategories(value);
                }}
                containerStyle={{ marginBottom: 10 }}
            />
            <Pressable style={globalStyles.button} onPress={submit}>
                <Text style={globalStyles.button_text}>{t('submit')}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10

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
        fontSize: 18,
        color: 'white'
    },
})