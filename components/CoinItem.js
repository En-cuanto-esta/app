import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight, ToastAndroid } from 'react-native'

const CoinItem = ({coin}) => {
    const priceStatus = (price) => {
        return price > 0 ? styles.priceUp : styles.priceDown
    }

    const underConstruction = () => {
        ToastAndroid.show('Esta opcion está en proceso...', ToastAndroid.SHORT);
    }

    return (
        <TouchableHighlight onPress={underConstruction}>
            <View style={styles.containerItem}>
                <View style={styles.coinNames}>
                    <Image style={styles.image}
                        source={{uri: coin.image}} 
                    />
                    <View style={styles.containerNames}>
                        <Text style={styles.textItem}>{coin.name}</Text>      
                        <Text style={styles.textSymbol}>{coin.symbol}</Text>                       
                    </View>       
                </View>
                <View>
                    <Text style={[styles.textItem, styles.textPrice]}>
                        ${coin.current_price}
                    </Text>
                    <Text style={[
                        styles.pricePercentage, 
                        priceStatus(coin.price_change_percentage_24h)
                    ]}>{coin.price_change_percentage_24h}</Text>                
                </View>                
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        color: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerNames: {
        marginLeft: 10
    },  
    coinNames: {
        flexDirection: 'row'
    },
    image:{
        width: 30,
        height: 30,
    },
    textItem: {
        color: '#fff'
    },
    textSymbol: {
        color: '#434343',
        textTransform: 'uppercase'
    },
    textPrice: {
        textAlign: 'right'
    },  
    pricePercentage: {
        textAlign: 'right'
    },
    priceUp: {
        color: '#00B5B9'
    },
    priceDown: {
        color: '#fc4422'
    }
});

export default CoinItem
