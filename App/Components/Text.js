import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import { Fonts } from 'App/Theme'

export default class Text extends React.Component {
  render() {
    return <RNText style={[style.defaultTextStyle, this.props.style]}>{this.props.children}</RNText>
  }
}

Text.propTypes = { style: PropTypes.object }

const style = StyleSheet.create({
  defaultTextStyle: {
    ...Fonts.normal,
    textAlign: 'center',
  },
})
