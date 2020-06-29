import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback, TextInput as RNTextInput } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text, GradientBackground } from 'App/Components'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DatePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
export default class Button extends React.Component {
  static defaultProps = { style: {} }
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

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
            <Text style={this.props.buttonTitleStyle || Fonts.normal}>{this.props.title}</Text>
          )}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

Button.propTypes = {
  style: PropTypes.object,
}
const styles = StyleSheet.create({})
