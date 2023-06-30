import { StyleSheet } from 'react-native';
import { secondary } from "./constants/colors";


export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: secondary,
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    }
})