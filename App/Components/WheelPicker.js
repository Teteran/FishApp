import React from 'react'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'
import { WheelPicker as RNWheelPicker } from 'react-native-wheel-picker-android'
import { Metrics, Colors } from 'App/Theme'
export default function WheelPicker(props) {
  return (
    <View style={[Metrics.tinyHorizontalPadding]}>
      <RNWheelPicker
        {...props}
        style={{
          width: 100,
          height: 175,
        }}
        isCyclic
        selectedItemTextSize={20}
        itemTextSize={20}
        indicatorWidth={2}
        indicatorColor={Colors.transparentBlack}
      />
    </View>
  )
}

WheelPicker.propTypes = {
  selectedItem: PropTypes.number,
  data: PropTypes.array.isRequired,
  onItemSelected: PropTypes.func.isRequired,
}
