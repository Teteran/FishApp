/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'

export default {
  button: {
    backgroundColor: Colors.primary,
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
    right: 20,
    bottom: 20,
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
  inputIcon: {
    flex: 1,
    ...Helpers.rowCenter,
    textAlign: 'center',
  },
}
