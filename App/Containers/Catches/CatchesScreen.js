import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Platform,
  View,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'
import Geolocation from '@react-native-community/geolocation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PropTypes } from 'prop-types'
import React from 'react'
import Style from './CatchesScreenStyle'
import { Text, GradientBackground, ListItem, Button } from 'App/Components'
import i18n from 'App/Services/i18n'
import WeatherActions from 'App/Stores/Weather/Actions'
import { connect } from 'react-redux'
import Weather from 'App/Assets/Images/11n.svg'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694ag0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694gfda0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

class CatchesScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item }) => (
            <ListItem id={item.id} item={item} onPress={this.onPressListItem} />
          )}
          keyExtractor={(item) => item.id}
        />
        <Button onPress={this.onPressListItem}>
          <Text style={Fonts.h1}>+</Text>
        </Button>
      </View>
    )
  }

  onPressListItem = () => {
    console.log(this.props.navigation)
    this.props.navigation.navigate('CatchesFormScreen', {
      params: { user: 'jane' },
    })
  }
}
CatchesScreen.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchesScreen)
