import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

let Calculate = ({average}) => {
    let [dollar, setDollar] = useState(1);
    return (
        <View style={styles.calculateView} >
            <Text style={styles.calculateText}>Quiero vender</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setDollar}
                value={dollar}
                keyboardType="numeric"
            ></TextInput>
            <Text style={[styles.calculateText, {textAlign: 'center'}]}>Eso equivale a {(average * dollar).toFixed(2)} bsS</Text>
        </View>
    )
};

let styles = StyleSheet.create({
    calculateView: {
        marginTop: 20
    },
    calculateText: {
        color: 'white',
        textAlign: 'center'
    },
    textInput: {
        backgroundColor: 'white',
        color: 'black',
        minWidth: 250,
        borderRadius: 25,
    }
});

export default Calculate;
