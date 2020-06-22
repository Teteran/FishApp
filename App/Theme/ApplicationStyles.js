/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import Colors from './Colors'

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

    elevation: 300,
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
}
