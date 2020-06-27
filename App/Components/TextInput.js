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
      <View>
        <Text style={ApplicationStyles.inputLabelText}>{this.props.label}</Text>
        <View style={ApplicationStyles.inputContainer}>
          <RNTextInput
            {...this.props}
            style={ApplicationStyles.inputText}
            onChangeText={(value) => this.setState({ value })}
            blurOnSubmit
            value={this.state.value}
          />
        </View>
      </View>
    )
  }
}

TextInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  numberOfLines: PropTypes.number,
}
