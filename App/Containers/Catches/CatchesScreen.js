import { View, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import { Fonts, Colors, Helpers } from 'App/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import Style from './CatchesScreenStyle'
import { Utils } from 'App/Utils'
import { Text, ListItem } from 'App/Components'
import { connect } from 'react-redux'
import ApplicationStyles from '../../Theme/ApplicationStyles'

class CatchesScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <FlatList
          data={this.props.catches}
          numColumns={2}
          renderItem={({ item, index }) => this._renderListItem(item, index)}
          keyExtractor={(item) => item.id}
        />
        <Pressable
          onPress={this._onPressListItem}
          style={[ApplicationStyles.floatingButton, Helpers.center , styles.floatingButton]}
        >
                 <MaterialCommunityIcons
            name="plus"
            color={Colors.primary}
            size={38}
          />
          </Pressable>  
      </View>
    )
  }

  _onPressListItem = () => {
    this.props.navigation.navigate('CatchesFormScreen')
  }

  _renderListItem = (item, index) => {
    const { fish_dimension, fish_weight, fish_type, catch_date } = item
    const margin = index % 2 ? {borderLeftWidth: 1} : {};
    return (
      <ListItem onPress={this._onPressListItem} containerStyle={{...margin, borderBottomWidth: 1, borderColor: Colors.transparentPrimary }}>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ width: '100%', height: 200 }}
        />
        <View style={[Helpers.rowCenter, Helpers.mainSpaceBetween]}>
          <Text style={[Fonts.normal, { color: Colors.primary }]}>{fish_type.name || 'Unknown'}</Text>
          <Text style={[Fonts.small, { color: Colors.secondary }]}>{Utils.formatDate(catch_date)}</Text>
        </View>
        <View style={[Helpers.rowCenter, Helpers.mainSpaceBetween]}>
          <Text style={[Fonts.normal, { color: Colors.secondary }]}>{fish_dimension}</Text>
          <Text style={[Fonts.normal, { color: Colors.secondary }]}>{fish_weight}</Text>
        </View>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  floatingButton: { backgroundColor: Colors.backgroundColor, borderColor:Colors.transparentPrimary, borderWidth: 1 },
})

CatchesScreen.propTypes = {}

const mapStateToProps = (state) => ({
  catches: state.catches.catches,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchesScreen)
