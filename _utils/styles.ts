import { Dimensions, StyleSheet } from "react-native";

export const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export const bgColor = '#FFF2F2';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor,
    },
    diceImage: {
        width: windowWidth * 0.4,//200,
        height: windowWidth * 0.4,//200,
    },
    diceContainer: {

    },
    rollBtnText: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#E5E0FF',
        fontSize: 16,
        color: '#8EA7E9',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});