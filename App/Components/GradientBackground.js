import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { PropTypes } from 'prop-types'
import { Helpers, Metrics } from 'App/Theme'
export default class GradientBackground extends React.Component {
  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        {...this.props}
        colors={this.props.colors}
        style={[Helpers.rowCenter, Metrics.horizontalPadding, this.props.style]}
      >
        {this.props.children}
      </LinearGradient>
    )
  }
}

GradientBackground.defaultProps = {
  colors: [
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0.3)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.3)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0)',
  ],
  style: {},
}
GradientBackground.propTypes = {
  colors: PropTypes.array,
  style: PropTypes.object,
  props: PropTypes.object,
}
