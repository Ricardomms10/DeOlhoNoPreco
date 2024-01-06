import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';

export default function Title() {

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}> OLHO NA COMPRA </Text>
            <Image source={require('../../../assets/carrinho.png')}
                styles={styles.carrinhoImage}
            />
        </View>
    );
} 