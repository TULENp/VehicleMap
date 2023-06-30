
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n/translations/supportedLanguages';


export function SettingsScreen() {
    const { i18n } = useTranslation();

    //change language
    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={supportedLanguages}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => changeLanguage(item.code)}>
                        <Text style={styles.languageText}>{item.locale}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    languageText: {
        fontSize: 18,
        marginBottom: 12,
    },
});
