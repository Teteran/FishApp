import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainFormContainer: {
    ...Metrics.verticalMargin,
    ...Metrics.horizontalMargin,
    ...Metrics.verticalPadding,
    ...Metrics.horizontalPadding,
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.grey,
    ...ApplicationStyles.shadow,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  addNewCatchFloatingButton: {
    ...Helpers.center,
    backgroundColor: Colors.success,
  },
})
