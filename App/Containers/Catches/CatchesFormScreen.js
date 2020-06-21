import React from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  Platform,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'
import { Text } from 'App/Components'
class CatchesFormScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'cyan' }}>
        <Text>cccccc</Text>
      </View>
    )
  }
}
CatchesFormScreen.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchesFormScreen)
