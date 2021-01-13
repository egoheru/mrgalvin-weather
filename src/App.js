import logo from './logo.svg';
import './App.css';
import Heading from './components/heading';
import Form from './components/form';
import { render } from '@testing-library/react';
import React from 'react'
import Forecast from './components/forecast';
import Appmaps from './components/appmaps';
// import GoogleApiWrapper from './components/googlemaps';
const api_key = "a634a07eec339ac9699dc64129cad6db"

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    icon: "",
    description: "",
    error: ""
  }

getWeather = async (e) => {
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  e.preventDefault();
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&units=imperial&appid=${api_key}`)

  const response = await api_call.json()
   if (city && country) {
     this.setState({
       temperature: response.main.temp,
       city: response.name,
       country: response.sys.country,
       humidity: response.main.humidity,
       pressure: response.main.pressure,
       icon: response.weather[0].icon,
       description: response.weather[0].description,
       error: ""
     })
   } else {
     this.setState({
     error: "Please fill out input fields..."
    })
   }
}

  render() {
    return (
      <>
      <div className = "container">
      <Heading/>
      <div className="form">
      <Form loadWeather={this.getWeather} /></div>
      <div className="weather">
      <Forecast 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      pressure={this.state.pressure}
      icon={this.state.icon}
      description={this.state.description}
      error={this.state.error}/>
      </div>
    </div>
    <Appmaps/>
    {/* <GoogleApiWrapper/> */}
    </>
    )
  }
}

export default App;
