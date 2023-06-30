
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from "react-i18next";

//FIXME ts errors
export function SettingsScreen() {
    const { t, i18n } = useTranslation();
    // Supported Languages List
    const { supportedLngs } = i18n.services.resourceStore.data;
    console.log(t('listTab'));

    return (
        <View>
            <FlatList data={supportedLngs} renderItem={({ item }) => (

                <TouchableOpacity onPress={() => i18n.changeLanguage(item.code)}>
                    <Text>{item.locale}</Text>
                </TouchableOpacity>

            )} />
        </View>

    );
}
