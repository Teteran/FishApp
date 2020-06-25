import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
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
      <TouchableOpacity
        {...this.props}
        onPress={() => this.setState({ show: true })}
        style={ApplicationStyles.inputContainer}
      >
        <View style={Helpers.fillCenter}>
          <Text style={ApplicationStyles.inputText}>{this.state.selectedDate}</Text>
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
        </View>
        <MaterialCommunityIcons
          name={this.props.mode === 'date' ? 'calendar-month' : 'clock-outline'}
          color={Colors.error}
          size={30}
          style={Metrics.tinyHorizontalPadding}
        />
      </TouchableOpacity>
    )
  }
}

DateTimeInput.propTypes = {
  mode: PropTypes.oneOf(['date', 'time']).isRequired,
  onChange: PropTypes.func.isRequired,
}
