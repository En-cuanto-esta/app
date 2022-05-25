import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'

const QuickShow = () => {
    let [promedio, setPromedio] = useState(0);
    useEffect(() => {
        axios.get('https://en-cuanto-esta-vzla.herokuapp.com/reports')
        .then(response => {
            let promedio = response.data.promedio;
            setPromedio(promedio.toFixed(2));
        })
        .catch(err => console.log(err.response));
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                1$ = {promedio} bsS
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       borderWidth: 5,
       borderColor: '#8e44ad',
       width: '100%',
       maxHeight: 150,
       borderRadius: 10,
       alignItems: 'center',
       alignContent: 'center',
       justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 36
    }
});

export default QuickShow;