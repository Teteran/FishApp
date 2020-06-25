import React from 'react'
import { StyleSheet, View, TextInput as RNTextInput } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text, GradientBackground } from 'App/Components'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DatePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
export default class TextInput extends React.Component {
  static defaultProps = { numberOfLines: 1 }
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <RNTextInput
        {...this.props}
        style={[ApplicationStyles.inputContainer, ApplicationStyles.inputText]}
        onChangeText={(value) => this.setState({ value })}
        blurOnSubmit
        value={this.state.value}
      />
    )
  }
}

TextInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  numberOfLines: PropTypes.number,
}
