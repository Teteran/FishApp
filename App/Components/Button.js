import React from 'react'
import { View, TouchableNativeFeedback } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text } from 'App/Components'
import { ApplicationStyles, Fonts, Colors } from 'App/Theme'
export default class Button extends React.Component {
  static defaultProps = { style: {} }
  isButtonDisabled = () => {
    return this.props.disabled
  }
  render() {
    if (this.isButtonDisabled()) {
      this.props.style['backgroundColor'] = Colors.grey2
    }
    return (
      <TouchableNativeFeedback onPress={this.props.onPress} {...this.props}>
        <View style={[ApplicationStyles.button, ApplicationStyles.shadow, this.props.style]}>
          {this.props.children ? (
            this.props.children
          ) : (
            <Text
              style={[
                this.props.buttonTitleStyle || Fonts.normal,
                { textAlign: 'center', textAlignVertical: 'center' },
              ]}
            >
              {this.props.title}
            </Text>
          )}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}
