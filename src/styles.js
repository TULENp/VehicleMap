import { StyleSheet } from 'react-native';
import { primaryButton, secondary } from "./constants/colors";


export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: secondary,
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: primaryButton,
        width: 350,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    button_text: {
        fontSize: 18,
        color: 'white'
    },
})