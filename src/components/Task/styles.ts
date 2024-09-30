import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#184251',
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row'
    },
    checkBox: {
        marginLeft: 12
    },
    nameTask: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        marginLeft: 16,
    },
    buttonRemove:{
        backgroundColor: '#000',
        width: 56,
        height: 56,
        marginLeft: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontWeight: "700",
        fontSize: 24,
        color: '#fff',
    }
})