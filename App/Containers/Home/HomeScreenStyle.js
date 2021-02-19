import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'

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
    ...ApplicationStyles.shadow,
    width: Math.round(Metrics.deviceWidth * (7 / 10)),
    height: Math.round(Metrics.deviceWidth * (7 / 10)),
    backgroundColor: Colors.transparentBlack,
    borderRadius: 180,
  },
  weatherGeneralsContainer: {
    width: '100%',
    height: '50%',
    ...Helpers.center,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
  },
  weatherDetailsContainer: {
    width: '100%',
    height: '50%',
    ...Helpers.center,
    ...Metrics.tinyVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    backgroundColor: Colors.transparentBlack,
    borderBottomLeftRadius: 180,
    borderBottomRightRadius: 180,
  },
  innerWeatherContainer: {
    width: Math.round(Metrics.deviceWidth * (8 / 10)),
    height: Math.round(Metrics.deviceWidth * (8 / 10)),
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 180,
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
