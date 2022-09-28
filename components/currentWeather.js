import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ProgressViewIOSComponent } from 'react-native';

export default function Currentweather(props) {

    return(
            <View style={styles.container}>
            <Image
              style={styles.icon}
              source={{uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`}}
            />
            <Text style={styles.text}>{props.temperature}</Text>
            <Text style={{fontSize: 25, marginBottom: 20,}}>{props.description}</Text>
             </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 300,
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
  