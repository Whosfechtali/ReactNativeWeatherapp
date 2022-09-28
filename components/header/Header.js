import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {

    const timeElapsed = Date.now();
    const today = Intl.DateTimeFormat(navigator.language, { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date())

    return(
        <View style={styles.header}>
        <Text style={styles.text}>{props.city}</Text>
        <Text style={styles.date}>{today}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        height: 100,
        marginVertical: 10,
        alignItems: 'center',
    },
    text:{
        fontSize: 30,
    },
    date:{
        marginVertical: 10,
        fontSize: 20,
    }
  });
  