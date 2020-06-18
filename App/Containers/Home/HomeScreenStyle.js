import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  error: {
    ...Fonts.normal,
    color: Colors.error,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  instructions: {
    ...Fonts.normal,
    fontStyle: 'italic',
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  weatherContainer: {
    ...Helpers.center,
    ...Helpers.mainCenter,
    width: Math.round(Metrics.deviceWidth * (7 / 10)),
    height: Math.round(Metrics.deviceWidth * (7 / 10)),
    backgroundColor: Colors.transparentBlack,
    borderRadius: 1000,
  },
  weatherGeneralsContainer: {
    width: '100%',
    height: '50%',
    ...Helpers.center,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
  },
  weatherDetailsContainer: {
    width: '100%',
    height: '50%',
    ...Helpers.center,
    ...Metrics.tinyVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    backgroundColor: Colors.transparentBlack,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  innerWeatherContainer: {
    width: Math.round(Metrics.deviceWidth * (8 / 10)),
    height: Math.round(Metrics.deviceWidth * (8 / 10)),
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
  },
  detailDivider: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  result: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  text: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
})
