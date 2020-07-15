/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { Fonts, Helpers, Metrics, Colors } from 'App/Theme'

export default {
  button: {
    ...Helpers.center,
    ...Metrics.smallVerticalPadding,
    ...Metrics.horizontalPadding,
    ...Metrics.horizontalMargin,
    ...Metrics.tinyVerticalMargin,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 1,
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    right: 10,
    bottom: 10,
    borderRadius: 360,
    elevation: 5,
  },
  inputContainer: {
    ...Helpers.rowCenter,
    ...Metrics.tinyVerticalPadding,
    borderWidth: 0.5,
    borderColor: Colors.grey2,
    borderRadius: 5,
    marginBottom: 20,
  },
  inputText: {
    flex: 3,
    ...Fonts.normal,
    textAlign: 'center',
    color: Colors.text,
    padding: 0,
    marginHorizontal: 5,
  },
  inputLabelText: {
    ...Fonts.medium,
    textAlign: 'left',
    color: Colors.text,
    padding: 0,
    marginHorizontal: 5,
  },
  inputIcon: {
    flex: 1,
    ...Helpers.rowCenter,
    textAlign: 'center',
  },
  card: {
    ...Metrics.verticalMargin,
    ...Metrics.horizontalMargin,
    ...Metrics.verticalPadding,
    ...Metrics.horizontalPadding,
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.grey,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 1,
  },
}
