import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#143642',
        padding: 20,
        flex: 1
    },
    title: {
        color: '#00A9A5',
        fontWeight: "700",
        fontSize: 22,
        textAlign: 'center',
        marginTop: '50%',
    },
    subtitle: {
        color: '#006F6E',
        textAlign: 'center',
        marginBottom: 25
    },
    form:{
        flexDirection: 'row'
    },
    input: {
        backgroundColor: '#184251',
        color: '#fff',
        flex: 1,
        padding: 15,
        borderRadius: 8,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#00A9A5',
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
        height: 56,
        borderRadius: 8,
        marginLeft: 5
    },
    buttonText: {
        color: '#143642',
        fontWeight : "700",
        fontSize: 24
    },
    emptyList: {
        color: '#fff',
        textAlign: 'center'
    }
    
})