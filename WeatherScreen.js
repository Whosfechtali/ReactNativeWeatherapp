import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ProgressViewIOSComponent } from 'react-native';
import { useState } from 'react';
import Header from './components/header/Header.js'
import Forecast from './components/Forecast.js'
import Currentweather from './components/currentWeather.js'
import Refreshdata from './components/Refreshdata.js'

export default function WeatherScreen() {

  const [cityName, SetcityName] = useState('Helsinki')
  const [weatherData, SetweatherData] = useState({

          city: 'Helsinki',
          description: 'Sunny',
          temperature: '20',
          icon: '01d',
  })

  const fetchData = async () =>{
    const apiKey = "d18b45a069120f4e979571f9c634e255"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    try{
      const result = await fetch(apiUrl);
      const jsonWeatherObject = await result.json()
      SetweatherData({
          city: jsonWeatherObject.name,
          description: jsonWeatherObject.weather[0].description,
          temperature: jsonWeatherObject.main.temp.toFixed(0),
          icon: jsonWeatherObject.weather[0].icon
      });
      console.log(weatherData)
    }catch{}
  }

  const updateCity = (City) =>{
      SetcityName(City)
  }

  return (
    <ImageBackground source={require('./background.png')} style={{width: '100%', height: '100%'}}>
    <SafeAreaView>
    <View style={styles.container}>
    <Header city={weatherData.city}/>
    <Forecast/>
    <Currentweather icon={weatherData.icon} temperature={weatherData.temperature} description={weatherData.description} />
    <Refreshdata updateCity={updateCity} fetchData={fetchData}/>
    </View>
    </SafeAreaView>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});