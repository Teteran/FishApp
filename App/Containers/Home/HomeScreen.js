import { ActivityIndicator, Button, Image, ImageBackground, Platform, View } from 'react-native'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'

import Geolocation from '@react-native-community/geolocation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PropTypes } from 'prop-types'
import React from 'react'
import Style from './HomeScreenStyle'
import { Text } from 'App/Components'
import i18n from 'App/Services/i18n'
import WeatherActions from 'App/Stores/Weather/Actions'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
  componentDidMount() {
    Geolocation.getCurrentPosition((info) => {
      const { latitude, longitude } = info.coords
      this.props.fetchWeatherData(latitude, longitude)
    })
  }

  render() {
    const { weatherConditions } = this.props
    return (
      <ImageBackground source={Images.homeBackground} style={[Helpers.fill, Helpers.center]}>
        <View style={Style.weatherContainer}>
          {this.renderWeatherGeneralsContainer(weatherConditions)}
          {this.renderWeatherDetailsContainer(weatherConditions)}
        </View>
      </ImageBackground>
    )
  }
  renderWeatherGeneralsContainer = (weatherConditions) => {
    return (
      <View style={Style.weatherGeneralsContainer}>
        <Text style={Fonts.h1}>{Math.floor(weatherConditions.main.feels_like)} °C</Text>
        <Text style={Fonts.normal}>
          {i18n.t('home.station', { stationName: weatherConditions?.stationName })}
        </Text>
      </View>
    )
  }

  renderWeatherDetailsContainer = (weatherConditions) => {
    return (
      <View style={Style.weatherDetailsContainer}>
        <View style={[Helpers.fillRowCenter, Helpers.mainSpaceBetween, Style.detailDivider]}>
          <MaterialCommunityIcons
            name="gauge"
            color={Colors.red}
            size={26}
            style={Metrics.tinyHorizontalPadding}
          />
          <Text>{weatherConditions?.main?.pressure} hPa</Text>
        </View>
        <View style={[Helpers.fillRowCenter, Helpers.mainSpaceBetween, Style.detailDivider]}>
          <MaterialCommunityIcons
            name="arrow-up-thick"
            color={Colors.brightBlue}
            size={26}
            style={[
              Metrics.tinyHorizontalPadding,
              { transform: [{ rotate: `${weatherConditions?.wind?.deg}deg` }] },
            ]}
          />
          <Text>{Math.floor(weatherConditions.wind.speed)} km/h</Text>
        </View>
        <View style={[Helpers.fillRowCenter, Helpers.mainSpaceBetween, Style.detailDivider]}>
          <MaterialCommunityIcons
            name="water-percent"
            color={Colors.green}
            size={26}
            style={Metrics.tinyHorizontalPadding}
          />
          <Text>{weatherConditions?.main?.humidity}%</Text>
        </View>
      </View>
    )
  }
}
HomeScreen.propTypes = {}

const extractWeatherConditions = (obj) => {
  if (obj) {
    return {
      weatherIcon: obj?.weather[0]?.icon,
      main: obj?.main,
      wind: obj?.wind,
      sunrise: obj?.sys?.sunrise,
      sunset: obj?.sys?.sunset,
      stationName: obj?.name,
    }
  }
  return null
}

const mapStateToProps = (state) => ({
  stationName: state.weatherData.weatherData.name,
  weatherConditions: extractWeatherConditions(state.weatherData.weatherData),
})

const mapDispatchToProps = (dispatch) => ({
  fetchWeatherData: (lat, lon) => dispatch(WeatherActions.fetchWeatherData(lat, lon)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
