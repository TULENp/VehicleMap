
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n/translations/supportedLanguages';
import { primaryButton, secondaryButton } from '../constants/colors';
import { globalStyles } from '../styles';

//* display setting (change language)
export function SettingsScreen() {
    const { i18n } = useTranslation(); // get main translation component
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // get selected language

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
        setSelectedLanguage(code);
    };

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={supportedLanguages}
                renderItem={({ item }) =>
                    <Pressable
                        style={[styles.listItem, (item.code === selectedLanguage) && styles.selectedLanguage]}
                        onPress={() => changeLanguage(item.code)}>
                        <Text style={[styles.languageText, (item.code === selectedLanguage) && styles.selectedText]}>{item.locale}</Text>
                    </Pressable>
                }
                keyExtractor={(item) => item.code}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 8,
        padding: 10,
        backgroundColor: secondaryButton,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedLanguage: {
        backgroundColor: primaryButton,
    },
    languageText: {
        fontSize: 30
    },
    selectedText: {
        color: 'white'
    },
});