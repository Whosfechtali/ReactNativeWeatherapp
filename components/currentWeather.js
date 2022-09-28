import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Currentweather() {

    return(
        <View style={styles.currentWeather}>
            <View style={styles.container}>
            <Image
              style={styles.icon}
              source={{uri: 'https://openweathermap.org/img/wn/01d@2x.png'}}
            />
            <Text style={styles.text}>23°</Text>
            <Text style={{fontSize: 25, marginBottom: 20,}}>Sunny</Text>
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    currentWeather:{
        flex: 1,
        height: 300,
        marginBottom: 100,
    },
    container:{
        flexDirection: 'column',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    icon:{
        height: 150,
        width: 200,
        padding: 20,
    },
    text:{
        fontSize: 70,
    }
  });
  