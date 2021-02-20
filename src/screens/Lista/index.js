import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import Fundo from '../../../assets/fundo.jpg';
import styles from './styles';

const lista = [
    {
        nome: "Bolinho de queijo",
        preco: "R$2.00"
    },
    {
        nome: "Bolinho de Carne",
        preco: "R$2.00"
    },
    {
        nome: "Coxinha",
        preco: "R$2.00"
    },
    {
        nome: "Enroladinho de Salsicha",
        preco: "R$2.50"
    },
    {
        nome: "Risole",
        preco: "R$2.00"
    },
    {
        nome: "Empada",
        preco: "R$3.00"
    },
    {
        nome: "Fogazza",
        preco: "R$4.50"
    },

]

function Lista() {
    return (
        <ScrollView style={styles.caixa}>
            
                <ImageBackground source={Fundo} style={styles.fundo}>
                    <View style={styles.fundo}>
                        <View style={styles.cardlist}>
                            {
                                lista.map((lista, index) =>
                                    <Text style={styles.lista} key={index}>{lista.nome}{"\n"}Preço: {lista.preco}</Text>
                                )
                            }
                        </View>
                    </View>
                </ImageBackground>
            
        </ScrollView>
    )
}

export default Lista;