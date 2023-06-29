import { View, Text, Button } from 'react-native'
import React, { SetStateAction, useState } from 'react'
import { ButtonGroup } from '@rneui/themed';

type FiltersProps = {
    selectedCategories: number[],
    setSelectedCategories: (selectedCategories: number[]) => void,
    submit: () => void
}

export function Filters({ selectedCategories, setSelectedCategories, submit }: FiltersProps) {
    //TODO add markers icon
    return (
        <View>
            <ButtonGroup
                buttons={['Грузовой', 'Пассажирский', 'Спецтранспорт']}
                selectMultiple
                selectedIndexes={selectedCategories}
                onPress={(value) => {
                    setSelectedCategories(value);
                }}
                containerStyle={{ marginBottom: 20 }}
            />
            <Button title='Применить' onPress={submit} />
        </View>
    )
}