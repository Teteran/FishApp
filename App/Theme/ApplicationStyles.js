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
    borderRadius: 180,
    elevation: 5,
  },
  inputContainer: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.grey2,
    borderRadius: 10,
  },
  inputText: {
    flex: 3,
    ...Fonts.normal,
    textAlign: 'center',
    color: Colors.backgroundColor,
    padding: 0,
    marginHorizontal: 5,
    marginVertical: 2.5,
  },
  inputLabelText: {
    ...Fonts.medium,
    textAlign: 'left',
    color: Colors.primary,
    padding: 0,
    marginHorizontal: 5,
    marginTop: 10
  },
  inputIcon: {
    flex: 1,
    ...Helpers.rowCenter,
    textAlign: 'center',
  },
  card: {
    ...Metrics.tinyVerticalPadding,
    ...Metrics.tinyHorizontalPadding,
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    opacity: 0.85,

    elevation: 1,
  },
}
