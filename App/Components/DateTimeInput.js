import React from 'react'
import { View, TouchableNativeFeedback, TextInput as RNTextInput, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text } from 'App/Components'
import { Utils } from 'App/Utils'
import { ApplicationStyles, Colors } from 'App/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DatePicker from '@react-native-community/datetimepicker'

export default class DateTimeInput extends React.Component {
  static defaultProps = { mode: 'time' }
  constructor(props) {
    super(props)
    this.state = {
      showDatePicker: false,
      selectedDate: new Date(),
    }
  }
  render() {
    const formatString = this.props.mode === 'date' ? 'DD/MM/YYYY' : 'HH:mm'
    const selectedDate = Utils.formatDate(this.state.selectedDate, formatString)
    return (
      <View>
        <Text style={ApplicationStyles.inputLabelText}>{this.props.label}</Text>
        <TouchableNativeFeedback {...this.props} onPress={() => this.setState({ showDatePicker: true })}>
          <View style={ApplicationStyles.inputContainer}>
            <RNTextInput
              {...this.props}
              maxLength={10}
              caretHidden
              editable={false}
              style={ApplicationStyles.inputText}
              value={selectedDate}
            />
            {this.state.showDatePicker && (
              <DatePicker
                value={new Date()}
                is24Hour
                mode={this.props.mode}
                maximumDate={new Date(2020, 6, 28)}
                onChange={(event, selectedDate) => {
                  this.setState({ showDatePicker: false, selectedDate }, () =>
                    this.props.onChange(selectedDate)
                  )
                }}
              />
            )}
            <View style={styles.inputIconContainer}>
            <MaterialCommunityIcons
              name={this.props.mode === 'date' ? 'calendar-month' : 'clock-outline'}
              color={Colors.backgroundColor}
              size={30}
              style={ApplicationStyles.inputIcon}
            />
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  inputIconContainer: {
    position: 'relative', flex:1, backgroundColor: Colors.secondary, borderTopRightRadius: 10, borderBottomRightRadius: 10, opacity: 0.5
  },
})

DateTimeInput.propTypes = {
  mode: PropTypes.oneOf(['date', 'time']).isRequired,
  onChange: PropTypes.func.isRequired,
}
