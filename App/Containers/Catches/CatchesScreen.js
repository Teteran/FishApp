import { View, FlatList } from 'react-native'
import { Fonts } from 'App/Theme'
import React from 'react'
import Style from './CatchesScreenStyle'
import { Text, ListItem, Button } from 'App/Components'
import { connect } from 'react-redux'

class CatchesScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <FlatList
          data={this.props.catches}
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
    this.props.navigation.navigate('CatchesFormScreen')
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
