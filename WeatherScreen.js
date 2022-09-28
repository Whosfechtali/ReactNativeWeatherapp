import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { useState } from 'react';
import Header from './components/header/Header.js'
import Forecast from './components/Forecast.js'
import Currentweather from './components/currentWeather.js'
import Refreshdata from './components/Refreshdata.js'

export default function WeatherScreen() {

  const [cityName, SetcityName] = useState('Helsinki')
  const [weatherData, SetweatherData] = useState([{}])

  const fetchData = async () =>{
    const apiKey = "d18b45a069120f4e979571f9c634e255"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    try{
      const result = await fetch(apiUrl);
      const jsonWeatherObject = await result.json()
      console.log(jsonWeatherObject)
    }catch{
      console.log("he")
    }
  }

  const updateCity = (City) =>{
      SetcityName(City)
  }

  return (
    <SafeAreaView>
    <ImageBackground source={require('./background.png')} style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
    <Header/>
    <Forecast/>
    <Currentweather/>
    <Refreshdata updateCity={updateCity} fetchData={fetchData}/>
    </View>
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});