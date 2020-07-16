import React, { useState } from 'react'
import { View, TextInput as RNTextInput, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { WheelPicker } from 'react-native-wheel-picker-android'
import { PropTypes } from 'prop-types'
import { Text, Modal } from 'App/Components'
import { ApplicationStyles, Colors } from 'App/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const wheelPickerData = ['1', '2', '3', '4', '5', '6']
export default function NumericInput(props) {
  const [selectedItem, setSelectedItem] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem)
  }

  onModalVisibleChange = (e) => {
    console.log('xxxx', e)
    setModalVisible(e)
  }
  return (
    <View>
      <Text style={ApplicationStyles.inputLabelText}>{props.label}</Text>
      <TouchableNativeFeedback {...props} onPress={() => setModalVisible(true)}>
        <View style={ApplicationStyles.inputContainer}>
          <Modal
            modalTitle={props.label}
            modalVisible={modalVisible}
            onModalVisibleChange={onModalVisibleChange}
          />

          {/* <RNTextInput
            keyboardType="numeric"
            maxLength={9}
            disabled
            style={[ApplicationStyles.inputText]}
            onChangeText={(value) => {
              if (props.inputValidationRegex.test(value) || value === '') {
                props.onChangeValue(value)
              }
            }}
            value={`${props.value}`}
          /> */}
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
}
NumericInput.propTypes = {
  onChangeValue: PropTypes.func.isRequired,
  inputValidationRegex: PropTypes.instanceOf(RegExp),
  inputIcon: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparentBlack,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
    marginHorizontal: 50,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
