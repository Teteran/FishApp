import React, { useState } from 'react'
import { View, TextInput as RNTextInput, TouchableNativeFeedback } from 'react-native'

import { PropTypes } from 'prop-types'
import { Text, Modal, WheelPicker } from 'App/Components'
import { ApplicationStyles, Colors, Metrics, Helpers } from 'App/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const wheelPickerData = ['1', '2', '3', '4', '5', '6']
export default function NumericInput(props) {
  const { wheelsConfig } = props

  const [selectedItems, setSelectedItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  onItemSelected = (index, value) => {
    let tmp = [...selectedItems]
    tmp[index] = value // replace e.target.value with whatever you want to change it to
    setSelectedItems(tmp)
  }

  onModalVisibleChange = (e) => {
    setModalVisible(e)
  }

  generateWheelDataFromConfig = (config) => {
    let result = []
    let y = 0
    for (wheelConfig of wheelsConfig) {
      let array = []
      i = wheelConfig.min
      while (i < wheelConfig.max) {
        array.push(`${i.toString()} ${wheelConfig.unit || ''}`)
        i += wheelConfig.step
      }
      result[y++] = array
    }
    return result
  }

  const wheelData = generateWheelDataFromConfig(wheelsConfig)

  return (
    <View>
      <Text style={ApplicationStyles.inputLabelText}>{props.label}</Text>
      <TouchableNativeFeedback {...props} onPress={() => setModalVisible(true)}>
        <View style={ApplicationStyles.inputContainer}>
          <Modal
            modalTitle={props.label}
            modalVisible={modalVisible}
            onModalVisibleChange={onModalVisibleChange}
            actions={[{ label: 'done', action: () => console.log('xxxxx') }]}
          >
            <View style={Helpers.row}>
              {wheelsConfig.map((data, index) => {
                return (
                  <WheelPicker
                    key={index}
                    selectedItem={selectedItems[index]}
                    data={wheelData[index]}
                    onItemSelected={(value) => onItemSelected(index, value)}
                  />
                )
              })}
            </View>
          </Modal>

          <RNTextInput
            keyboardType="numeric"
            maxLength={9}
            editable={false}
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
      </TouchableNativeFeedback>
    </View>
  )
}

NumericInput.defaultProps = {
  inputValidationRegex: /^\d*(\,|\.)?\d*$/,
  value: 0,
  wheelsConfig: [{ min: 0, max: 10, step: 1 }],
}
NumericInput.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  inputValidationRegex: PropTypes.instanceOf(RegExp),
  inputIcon: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wheelsConfig: PropTypes.arrayOf(
    PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      step: PropTypes.number.isRequired,
      unit: PropTypes.string,
    })
  ),
}
