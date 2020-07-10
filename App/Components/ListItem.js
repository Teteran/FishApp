import React from 'react'
import { View, TouchableNativeFeedback } from 'react-native'
import { ApplicationStyles, Metrics } from 'App/Theme'
export default class ListItem extends React.Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View
          style={[
            ApplicationStyles.card,
            Metrics.smallVerticalMargin,
            Metrics.smallHorizontalMargin,
          ]}
        >
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

ListItem.propTypes = {}
