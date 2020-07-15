import { View, FlatList, Image } from 'react-native'
import { Fonts, Colors, Metrics, Helpers } from 'App/Theme'
import React from 'react'
import Style from './CatchesScreenStyle'
import { Utils } from 'App/Utils'
import { Text, ListItem, Button } from 'App/Components'
import { connect } from 'react-redux'
import ApplicationStyles from '../../Theme/ApplicationStyles'

class CatchesScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <FlatList
          data={this.props.catches}
          numColumns={2}
          renderItem={({ item }) => this._renderListItem(item)}
          keyExtractor={(item) => item.id}
        />
        <Button
          onPress={this._onPressListItem}
          style={[ApplicationStyles.floatingButton, { backgroundColor: Colors.success }]}
          title="+"
          buttonTitleStyle={Fonts.h1}
        />
      </View>
    )
  }

  _onPressListItem = () => {
    this.props.navigation.navigate('CatchesFormScreen')
  }

  _renderListItem = (item) => {
    const { fish_dimension, fish_weight, fish_type, catch_date } = item
    return (
      <ListItem onPress={this._onPressListItem}>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ width: '100%', height: 200 }}
        />
        <View style={[Helpers.rowCenter, Helpers.mainSpaceBetween]}>
          <Text style={[Fonts.normal, { color: Colors.text }]}>{fish_type.name || 'Unknown'}</Text>
          <Text style={[Fonts.small, { color: Colors.text2 }]}>{Utils.formatDate(catch_date)}</Text>
        </View>
        <View style={[Helpers.rowCenter, Helpers.mainSpaceBetween]}>
          <Text style={[Fonts.normal, { color: Colors.text2 }]}>{fish_dimension} cm</Text>
          <Text style={[Fonts.normal, { color: Colors.text2 }]}>{fish_weight} kg</Text>
        </View>
      </ListItem>
    )
  }
}
CatchesScreen.propTypes = {}

const mapStateToProps = (state) => ({
  catches: state.catches.catches,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchesScreen)
