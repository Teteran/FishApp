import { ActivityIndicator, Button, Image, ImageBackground, Platform, View } from 'react-native'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'

import Geolocation from '@react-native-community/geolocation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PropTypes } from 'prop-types'
import React from 'react'
import Style from './HomeScreenStyle'
import { Text, GradientBackground } from 'App/Components'
import i18n from 'App/Services/i18n'
import WeatherActions from 'App/Stores/Weather/Actions'
import { connect } from 'react-redux'
import Weather from 'App/Assets/Images/11n.svg'

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
      <ImageBackground source={Images.homeBackground} style={[Helpers.fillColCenter]}>
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
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialCommunityIcons
            name="weather-partlycloudy"
            color={Colors.yellow}
            size={50}
            style={[Metrics.tinyHorizontalPadding, { height: '50%' }]}
          />
          <View
            style={{
              height: '50%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Text style={[Fonts.h2, { lineHeight: 34, height: 34 }]}>
              {Math.floor(weatherConditions.main.feels_like)}
            </Text>
            <Text style={[Fonts.normal, { height: 42 }]}>°C</Text>
          </View>
        </View>

        <GradientBackground
          colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}
          style={{ width: '100%' }}
        >
          <Text style={Fonts.small}>
            {i18n.t('home.station', { stationName: weatherConditions?.stationName })}
          </Text>
        </GradientBackground>
      </View>
    )
  }

  renderWeatherDetailsContainer = (weatherConditions) => {
    return (
      <View style={Style.weatherDetailsContainer}>
        <View style={[Helpers.fillRowCenter, Helpers.mainSpaceBetween]}>
          <GradientBackground>
            <MaterialCommunityIcons
              name="gauge"
              color={Colors.red}
              size={20}
              style={Metrics.tinyHorizontalPadding}
            />
            <Text style={Fonts.medium}>{weatherConditions?.main?.pressure} hPa</Text>
          </GradientBackground>
        </View>
        <View style={[Helpers.fillRowCenter, Helpers.mainSpaceBetween]}>
          <GradientBackground>
            <MaterialCommunityIcons
              name="navigation"
              color={Colors.brightBlue}
              size={20}
              style={[
                Metrics.tinyHorizontalPadding,
                { transform: [{ rotate: `${weatherConditions?.wind?.deg}deg` }] },
              ]}
            />
            <Text style={Fonts.medium}>{Math.floor(weatherConditions.wind.speed)} km/h</Text>
          </GradientBackground>
        </View>
        <View style={[Helpers.fillRowCenter, Helpers.mainSpaceBetween]}>
          <GradientBackground>
            <MaterialCommunityIcons
              name="water-percent"
              color={Colors.green}
              size={20}
              style={Metrics.tinyHorizontalPadding}
            />
            <Text style={Fonts.medium}>{weatherConditions?.main?.humidity}%</Text>
          </GradientBackground>
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
