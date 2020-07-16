import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 24,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  big: 46,
}

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  h5: {
    fontSize: size.h5,
  },
  normal: {
    fontSize: size.regular,
    color: Colors.white,
  },
  medium: {
    fontSize: size.medium,
  },
  small: {
    fontSize: size.small,
  },
  big: {
    fontSize: size.big,
  },
  bold: {
    fontWeight: 'bold',
  },
})
