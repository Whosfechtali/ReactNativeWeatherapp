import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView} from 'react-native';

export default function Refreshdata(props) {


    return(
        <KeyboardAvoidingView styles="AvoidingView" behavior="padding">
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Enter a city"
                onChangeText={props.updateCity}
            />
            <Button
                style={styles.button}
                title="Submit"
                onPress={props.fetchData}
                />
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
    },
    input:{
        width: 300,
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        fontSize: 20,
        marginBottom: 20,
        backgroundColor: '#EEF9FD',
    },
    button:{
        width: 300,
        height: 50,
    }
})