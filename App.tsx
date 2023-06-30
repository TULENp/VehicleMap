import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from './src/navigation/AppNavigation';
import { I18nextProvider } from "react-i18next";
import i18n from "./src/i18n/i18n";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {

    return (
        <I18nextProvider i18n={i18n}> 
            <SafeAreaProvider>
                <AppNavigation />
            </SafeAreaProvider>
        </I18nextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
