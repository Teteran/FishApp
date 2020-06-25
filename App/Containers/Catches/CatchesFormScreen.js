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
  StyleSheet,
  ScrollView,
} from 'react-native'
import Style from './CatchesScreenStyle'
import { ApplicationStyles, Fonts, Helpers, Images, Metrics, Colors } from 'App/Theme'
import { Text, TextInput, NumericInput, DateTimeInput } from 'App/Components'

import { validationService } from 'App/Services/FormValidationService'
class CatchesFormScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: {
        fish_type: {
          type: 'FishType',
          value: '',
        },
        fish_dimension: {
          type: 'FishDimension',
          value: '',
        },
        fish_weight: {
          type: 'FishWeight',
          value: '',
        },
        catch_date: {
          type: 'generic',
          value: '',
        },
        catch_time: {
          type: 'generic',
          value: '',
        },
        catch_location_latitude: {
          type: 'generic',
          value: '',
        },
        catch_location_longitude: {
          type: 'generic',
          value: '',
        },
        fishing_lure: {
          type: 'generic',
          value: '',
        },
        fishing_notes: {
          type: 'generic',
          value: '',
        },
      },
    }

    this.onInputChange = validationService.onInputChange.bind(this)
    this.getFormValidation = validationService.getFormValidation.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.getFormValidation()
  }

  renderError(id) {
    const { inputs } = this.state
    if (inputs[id].errorLabel) {
      return <Text style={styles.error}>{inputs[id].errorLabel}</Text>
    }
    return null
  }

  render() {
    return (
      <View style={Style.mainFormContainer}>
        <ScrollView>
          <View style={Style.container}>
            <Text>Gatunek</Text>
            <TextInput
              onChangeText={(value) => {
                this.onInputChange({ id: 'fish_type', value })
              }}
            />
            {this.renderError('fish_type')}

            <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
              <View style={Style.container}>
                <Text>Fish Dimension</Text>
                <NumericInput
                  onChangeText={(value) => {
                    this.onInputChange({ id: 'fish_dimension', value })
                  }}
                />
                {this.renderError('fish_dimension')}
              </View>
              <View style={{ flex: 0.25 }} />
              <View style={Style.container}>
                <Text>Waga</Text>
                <NumericInput
                  onChangeText={(value) => {
                    this.onInputChange({ id: 'fish_weight', value })
                  }}
                />
                {this.renderError('fish_weight')}
              </View>
            </View>

            <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
              <View style={Style.container}>
                <Text>Data</Text>
                <DateTimeInput
                  mode="date"
                  onChange={(value) => {
                    this.onInputChange({ id: 'catch_time', value })
                  }}
                />
                {this.renderError('catch_date')}
              </View>
              <View style={{ flex: 0.25 }} />
              <View style={Style.container}>
                <Text>godzina</Text>
                <DateTimeInput
                  mode="time"
                  onChange={(value) => {
                    this.onInputChange({ id: 'catch_time', value })
                  }}
                />
                {this.renderError('catch_time')}
              </View>
            </View>

            <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
              <View style={Style.container}>
                <Text>latitude</Text>
                <TextInput
                  onChangeText={(value) => {
                    this.onInputChange({ id: 'catch_location_latitude', value })
                  }}
                />
                {this.renderError('catch_location_latitude')}
              </View>
              <View style={{ flex: 0.25 }} />
              <View style={Style.container}>
                <Text>longitude</Text>
                <TextInput
                  onChangeText={(value) => {
                    this.onInputChange({ id: 'catch_location_longitude', value })
                  }}
                />
                {this.renderError('catch_location_longitude')}
              </View>
            </View>
            <Text>Przynęta</Text>
            <TextInput
              onChangeText={(value) => {
                this.onInputChange({ id: 'fishing_lure', value })
              }}
            />
            {this.renderError('fishing_lure')}

            <Text>Notatka</Text>
            <TextInput
              editable
              maxLength={250}
              multiline
              numberOfLines={4}
              onChangeText={(value) => {
                this.onInputChange({ id: 'fishing_notes', value })
              }}
            />
            {this.renderError('fishing_notes')}
          </View>
        </ScrollView>

        <View style={styles.button}>
          <Button title="Submit Form" onPress={this.submit} />
        </View>
      </View>
    )
  }
}
CatchesFormScreen.propTypes = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  split: {
    flexDirection: 'row',
  },
  error: {
    position: 'absolute',
    bottom: 0,
    color: 'red',
    fontSize: 12,
  },
  button: {
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
})

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchesFormScreen)
