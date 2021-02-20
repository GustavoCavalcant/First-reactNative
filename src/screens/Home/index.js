import React from 'react';
import { View, Text, ImageBackground, TextInput, Button } from 'react-native';

import Fundo from '../../../assets/fundo.jpg';

import styles from './styles';

function Home({ navigation }) {

    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>


                
                <Text style={styles.titulo}>Quer experimentar os melhores salgados?{"\n"}
                        RECODESALGADOS
                </Text>
                <Text style={styles.subtitulo}>Acompanhe a lista dos salgados disponiveis...</Text>


                <Button
                    title="Lista"
                    onPress={() => navigation.navigate('Login')}
                />

            </ImageBackground>

        </View >
    )
}


export default Home;