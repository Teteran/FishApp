import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback, TextInput as RNTextInput } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text, GradientBackground } from 'App/Components'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DatePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
export default class DateTimeInput extends React.Component {
  static defaultProps = { mode: 'time' }
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  render() {
    return (
      <View>
        <Text style={ApplicationStyles.inputLabelText}>{this.props.label}</Text>
        <TouchableNativeFeedback {...this.props} onPress={() => this.setState({ show: true })}>
          <View style={ApplicationStyles.inputContainer}>
            <RNTextInput
              {...this.props}
              maxLength={9}
              caretHidden
              editable={false}
              style={ApplicationStyles.inputText}
              value={this.state.selectedDate}
            />
            {this.state.show && (
              <DatePicker
                value={new Date()}
                is24Hour
                mode={this.props.mode}
                maximumDate={new Date(2020, 6, 28)}
                onChange={(event, selectedDate) => {
                  const formatString = this.props.mode === 'date' ? 'DD/MM/YYYY' : 'HH:mm'
                  selectedDate = moment(selectedDate).format(formatString)
                  this.setState({ show: false, selectedDate }, () =>
                    this.props.onChange(selectedDate)
                  )
                }}
              />
            )}

            <MaterialCommunityIcons
              name={this.props.mode === 'date' ? 'calendar-month' : 'clock-outline'}
              color={Colors.error}
              size={30}
              style={ApplicationStyles.inputIcon}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

DateTimeInput.propTypes = {
  mode: PropTypes.oneOf(['date', 'time']).isRequired,
  onChange: PropTypes.func.isRequired,
}
