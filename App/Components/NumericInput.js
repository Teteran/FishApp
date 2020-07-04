import React from 'react'
import { View, TextInput as RNTextInput } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text } from 'App/Components'
import { ApplicationStyles, Colors } from 'App/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function NumericInput(props) {
  return (
    <View>
      <Text style={ApplicationStyles.inputLabelText}>{props.label}</Text>
      <View style={ApplicationStyles.inputContainer}>
        <RNTextInput
          keyboardType="numeric"
          maxLength={9}
          style={[ApplicationStyles.inputText]}
          onChangeText={(value) => {
            if (props.inputValidationRegex.test(value) || value === '') {
              props.onChangeValue(value)
            }
          }}
          value={`${props.value}`}
        />
        {props.inputIcon && (
          <MaterialCommunityIcons
            name={props.inputIcon}
            color={Colors.error}
            size={30}
            style={ApplicationStyles.inputIcon}
          />
        )}
      </View>
    </View>
  )
}

NumericInput.defaultProps = {
  inputValidationRegex: /^\d*(\,|\.)?\d*$/,
  value: 0,
}
NumericInput.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  inputValidationRegex: PropTypes.instanceOf(RegExp),
  inputIcon: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
