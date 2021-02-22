import { ImageBackground, View, Animated } from 'react-native'
import { Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'

import Geolocation from '@react-native-community/geolocation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import Style from './HomeScreenStyle'
import { Text, GradientBackground, CircularProgress } from 'App/Components'
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
    const progress = new Animated.Value(0.4);
    const { weatherConditions } = this.props
    return (
      <ImageBackground source={Images.homeBackground} style={[Helpers.fillCenter]}>
        <View style={Style.weatherContainer}>
        {/* <CircularProgress progress={progress} /> */}
          {this.renderWeatherGeneralsContainer(weatherConditions)}
          {this.renderWeatherDetailsContainer(weatherConditions)}
          <Text>{`sunrise:${weatherConditions.sunrise} `}</Text>
        <Text>{`sunset:${weatherConditions.sunset} `}</Text>
        </View>
      </ImageBackground>
    )
  }
  renderWeatherGeneralsContainer = (weatherConditions) => {
    return (
      <View style={Style.weatherGeneralsContainer}>
        <View style={Helpers.fillCenter}>
          <MaterialCommunityIcons
            name="weather-partlycloudy"
            color={Colors.primary}
            size={64}
            style={[Metrics.tinyHorizontalPadding]}
          />
          <View
            style={Helpers.rowCenter}
          >
            <Text style={[Fonts.h1]}>{Math.floor(weatherConditions?.main?.temp)}</Text>
            <Text style={[Fonts.h1]}>°C</Text>
          </View>
        </View>
        <Text
          style={[
            Fonts.small,
            Metrics.horizontalPadding,
            {
              backgroundColor: Colors.transparentBlack,
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            },
          ]}
        >
          {weatherConditions?.stationName }
        </Text>
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
            <Text style={Fonts.medium}>{Math.floor(weatherConditions?.wind?.speed)} km/h</Text>
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
