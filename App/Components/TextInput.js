import React from 'react'
import { View, TextInput as RNTextInput } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text } from 'App/Components'
import { ApplicationStyles } from 'App/Theme'

export default function TextInput(props) {
  return (
    <View>
      <Text style={ApplicationStyles.inputLabelText}>{props.label}</Text>
      <View style={ApplicationStyles.inputContainer}>
        <RNTextInput
          {...props}
          style={[ApplicationStyles.inputText, { textAlign: 'left' }]}
          onChangeText={(value) => props.onChangeText(value)}
          blurOnSubmit
          value={props.value}
        />
      </View>
    </View>
  )
}

TextInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  numberOfLines: PropTypes.number,
}
