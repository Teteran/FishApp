import React from 'react'
import { StyleSheet, View, TextInput as RNTextInput } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text, GradientBackground } from 'App/Components'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DatePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
export default class NumericInput extends React.Component {
  static defaultProps = { inputValidationRegex: /^\d*(\,|\.)?\d*$/ }
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <View style={ApplicationStyles.inputContainer}>
        <RNTextInput
          {...this.props}
          keyboardType="numeric"
          maxLength={9}
          style={[ApplicationStyles.inputText]}
          onChangeText={(value) => {
            this.validateInputValue(value)
          }}
          value={this.state.value}
        />
        {this.props.inputIcon && (
          <MaterialCommunityIcons
            name={this.props.inputIcon}
            color={Colors.error}
            size={30}
            style={ApplicationStyles.inputIcon}
          />
        )}
      </View>
    )
  }

  validateInputValue(value) {
    if (this.props.inputValidationRegex.test(value) || value === '') {
      this.setState({ value })
    }
  }
}

NumericInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  inputValidationRegex: PropTypes.instanceOf(RegExp),
  inputIcon: PropTypes.string,
}
