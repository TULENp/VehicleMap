import { View, Text, Button } from 'react-native'
import React, { SetStateAction, useState } from 'react'
import { ButtonGroup } from '@rneui/themed';
import { useTranslation } from 'react-i18next';

type FiltersProps = {
    selectedCategories: number[],
    setSelectedCategories: (selectedCategories: number[]) => void,
    submit: () => void
}

export function Filters({ selectedCategories, setSelectedCategories, submit }: FiltersProps) {
    //TODO add markers icon
    const { t } = useTranslation(); // translation hook

    return (
        <View>
            <Text>{t('filters')}</Text>
            <ButtonGroup
                buttons={[t('freight'), t('passenger'), t('special')]}
                selectMultiple
                selectedIndexes={selectedCategories}
                onPress={(value) => {
                    setSelectedCategories(value);
                }}
                containerStyle={{ marginBottom: 20 }}
            />
            <Button title={t('submit')} onPress={submit} />
        </View>
    )
}