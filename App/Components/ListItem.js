import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import { Text, GradientBackground } from 'App/Components'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'
export default class ListItem extends React.Component {
  render() {
    const itemData = this.props.item
    return (
      <TouchableOpacity {...this.props} onPress={this.props.onPress} style={style.itemContainer}>
        <Text>{itemData.title}</Text>
        {itemData.aaaa && <Text>{itemData.aaaa}</Text>}
      </TouchableOpacity>
    )
  }
}

ListItem.propTypes = {}

const style = StyleSheet.create({
  defaultTextStyle: {
    ...Fonts.normal,
    textAlign: 'center',
  },
  itemContainer: {
    flex: 1,
    ...Metrics.horizontalPadding,
    ...Metrics.tinyVerticalPadding,
    ...Metrics.tinyHorizontalMargin,
    ...Metrics.tinyVerticalMargin,
    backgroundColor: '#f9c2ff',
  },
})
