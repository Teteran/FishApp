import React from 'react'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text } from 'App/Components'
import { ApplicationStyles } from 'App/Theme'
import { Picker } from '@react-native-community/picker'
export default function SelectInput(props) {
  return (
    <View>
      <Text style={ApplicationStyles.inputLabelText}>{props.label}</Text>
      <View style={[ApplicationStyles.inputContainer]}>
        <Picker
          selectedValue={props.value}
          style={{ width: '100%', height: 42 }}
          mode="dropdown"
          onValueChange={(value) => {
            props.onChangeValue(value)
          }}
        >
          {props.data.map((item) => (
            <Picker.Item key={item.type} label={item.type} value={item} />
          ))}
        </Picker>
      </View>
    </View>
  )
}

SelectInput.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  defaultValue: PropTypes.number,
}
