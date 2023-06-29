import { View, Text } from 'react-native'
import React, { SetStateAction, useState } from 'react'
import { Button, ButtonGroup } from '@rneui/themed';

type FiltersProps = {
    selectedCategories: number[],
    setSelectedCategories: (selectedCategories: number[]) => void,
    submit: () => void
}

export function Filters({ selectedCategories, setSelectedCategories, submit }: FiltersProps) {

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
            <Button onPress={submit}>
                <Text>Применить</Text>
            </Button>
        </View>
    )
}