import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Geolocation from '@react-native-community/geolocation'
import Style from './HomeScreenStyle'
import WeatherActions from 'App/Stores/Weather/Actions'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'

class HomeScreen extends React.Component {
  componentDidMount() {
    Geolocation.getCurrentPosition((info) => {
      const { latitude, longitude } = info.coords
      this.props.fetchWeatherData(latitude, longitude)
    })
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        <View style={Style.logoContainer}>
          <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
        </View>
      </View>
    )
  }
}

HomeScreen.propTypes = {}

const extractWeatherConditions = (obj) => {
  if (obj) {
    return { weatherIcon: obj?.weather[0]?.icon, main: obj?.main, wind: obj?.wind }
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
