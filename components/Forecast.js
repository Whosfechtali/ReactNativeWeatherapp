import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast() {

    const [forecastData, setforecast ] = useState([
        {
            icon: "zeb",
            weather: "27",
            date: "thu 27 2022"
         }

    ]
)

    return(
        <View style={styles.logo}>
            <View style={styles.container}>

            <View style={styles.forecast}>

                <Text>Logo</Text>

            </View>
            <View style={styles.forecast}>

                <Text>logo</Text>

            </View>

            <View style={styles.forecast}>

                <Text>logo</Text>

            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 200,
        fontSize: 24,
    },
    container:{
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    forecast:{
        flex: 1,
        borderWidth: 1,
        height: 130,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginLeft: 5,
        borderRadius: 12,
    }
  });
  