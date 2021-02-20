import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%"
        //web 100vh
    },
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: "#003",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 75,
        backgroundColor: "white"
    },
    subtitulo: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: "#008",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16
    }
})

export default styles;