import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%"
        //web 100vh
    },
    fundo: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
    },
    cardlist:{
        width: "100%",
        height: "100%",
        justifyContent:'center',
        alignItems: 'center',
        marginVertical:220

      
    },
    lista:{
        color:"white",
        fontWeight: "bold",
        fontSize:16,
        width: "80%",
        textAlign: 'center',
        backgroundColor: '#fd0',
        borderWidth: 2,
        borderColor: "#003",
        padding: 3,
        margin:3,
        borderRadius: 6
    }
})

export default styles;