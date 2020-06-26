import {
  ActivityIndicator,
  Animated,
  Button,
  Easing,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native'
import { ApplicationStyles, Colors, Fonts, Helpers, Images, Metrics } from 'App/Theme'
import { DateTimeInput, NumericInput, Text, TextInput } from 'App/Components'

import Geolocation from '@react-native-community/geolocation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import Style from './CatchesScreenStyle'
import { connect } from 'react-redux'
import { validationService } from 'App/Services/FormValidationService'

class CatchesFormScreen extends React.Component {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
    this.scannerViewAnimatedValue = new Animated.Value(Metrics.deviceWidth)
    this.state = {
      focusedScreenIndex: 0,
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
      screens: [
        { name: 'generalInfo', isFocused: true },
        { name: 'detailedInfo', isFocused: false },
      ],
    }

    this.onInputChange = validationService.onInputChange.bind(this)
    this.getFormValidation = validationService.getFormValidation.bind(this)
    this.submit = this.submit.bind(this)
  }

  animate = (animatedValue, toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  submit() {
    this.animate(this.animatedValue, -1 * this.state.focusedScreenIndex * Metrics.deviceWidth)
    this.getFormValidation()
  }

  renderError(id) {
    const { inputs } = this.state
    if (inputs[id].errorLabel) {
      return <Text style={styles.error}>{inputs[id].errorLabel}</Text>
    }
    return null
  }

  goToNextScreen = () => {
    let currentScreenIndex = this.state.focusedScreenIndex + 1
    this.setState({ focusedScreenIndex: currentScreenIndex }, () =>
      this.animate(this.animatedValue, -1 * currentScreenIndex * Metrics.deviceWidth)
    )
  }

  goToPreviousScreen = () => {
    let currentScreenIndex = this.state.focusedScreenIndex - 1
    this.setState({ focusedScreenIndex: currentScreenIndex }, () =>
      this.animate(this.animatedValue, -1 * currentScreenIndex * Metrics.deviceWidth)
    )
  }

  render() {
    const animatedStyle = {
      transform: [{ translateX: this.animatedValue }],
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Animated.View style={[{ width: Metrics.deviceWidth }, animatedStyle]}>
            {this.renderGeneralInformationPage()}
          </Animated.View>
          <Animated.View style={[{ width: Metrics.deviceWidth }, animatedStyle]}>
            {this.renderDetailedInformationPage()}
          </Animated.View>
        </View>
        <View style={styles.button}>
          <Button title="Submit Form" onPress={this.submit} />
        </View>
      </View>
    )
  }

  renderGeneralInformationPage = () => {
    return (
      <ScrollView style={Style.mainFormContainer}>
        <View>
          <Text>Gatunek</Text>
          <TextInput
            onChangeText={(value) => {
              this.onInputChange({ id: 'fish_type', value })
            }}
          />
          {this.renderError('fish_type')}
        </View>

        <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
          <View style={Style.container}>
            <Text>Fish Dimension</Text>
            <NumericInput
              inputIcon="ruler"
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
              inputIcon="weight-kilogram"
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
        <View>
          <Text>Przynęta</Text>
          <TextInput
            onChangeText={(value) => {
              this.onInputChange({ id: 'fishing_lure', value })
            }}
          />
          {this.renderError('fishing_lure')}
        </View>

        <View>
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
        <View style={styles.button}>
          <Button
            title="Submit Form"
            onPress={() => {
              this.goToNextScreen()
            }}
          />
        </View>
      </ScrollView>
    )
  }
  renderDetailedInformationPage = () => {
    return (
      <ScrollView style={Style.mainFormContainer}>
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
        <View style={styles.button}>
          <Button
            title="Submit Form"
            onPress={() => {
              this.goToPreviousScreen()
            }}
          />
        </View>
      </ScrollView>
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
