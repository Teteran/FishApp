import {
  ActivityIndicator,
  Animated,
  Easing,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import { ApplicationStyles, Colors, Fonts, Helpers, Images, Metrics } from 'App/Theme'
import { DateTimeInput, NumericInput, Text, TextInput, Button } from 'App/Components'
import i18n from 'App/Services/i18n'
import Geolocation from '@react-native-community/geolocation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import Style from './CatchesScreenStyle'
import { connect } from 'react-redux'
import { validationService } from 'App/Services/FormValidationService'
const screensQuantity = 2

class CatchesFormScreen extends React.Component {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
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
        catch_temperature: {
          type: 'generic',
          value: '',
        },
        catch_pressure: {
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
    console.log(this.props)
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
    let currentScreenIndex = this.state.focusedScreenIndex
    if (this.isLastScreen()) return
    currentScreenIndex += 1
    this.setState({ focusedScreenIndex: currentScreenIndex }, () =>
      this.animate(this.animatedValue, -1 * currentScreenIndex * Metrics.deviceWidth)
    )
  }

  goToPreviousScreen = () => {
    let currentScreenIndex = this.state.focusedScreenIndex
    if (currentScreenIndex <= 0) return
    currentScreenIndex -= 1
    this.setState({ focusedScreenIndex: currentScreenIndex }, () =>
      this.animate(this.animatedValue, -1 * currentScreenIndex * Metrics.deviceWidth)
    )
  }

  isLastScreen = () => {
    let currentScreenIndex = this.state.focusedScreenIndex
    return currentScreenIndex >= screensQuantity - 1
  }

  render() {
    console.log(this.props.weatherConditions)
    const animatedStyle = {
      transform: [{ translateX: this.animatedValue }],
    }
    return (
      <View style={Helpers.fill}>
        <View style={Helpers.fillRow}>
          <Animated.View style={[{ width: Metrics.deviceWidth }, animatedStyle]}>
            {this.renderGeneralInformationPage()}
          </Animated.View>
          <Animated.View style={[{ width: Metrics.deviceWidth }, animatedStyle]}>
            {this.renderDetailedInformationPage()}
          </Animated.View>
        </View>
        <View style={[Helpers.row, Helpers.mainSpaceAround, Metrics.verticalMargin]}>
          <Button
            title={i18n.t('buttons.previous')}
            style={{ width: '30%' }}
            onPress={() => {
              this.goToPreviousScreen()
            }}
          />
          {this.isLastScreen() ? (
            <Button
              title={i18n.t('buttons.submit')}
              style={{ width: '30%', backgroundColor: Colors.success }}
              onPress={() => {
                this.submit()
              }}
            />
          ) : (
            <Button
              title={i18n.t('buttons.next')}
              style={{ width: '30%', backgroundColor: Colors.success }}
              onPress={() => {
                this.goToNextScreen()
              }}
            />
          )}
        </View>
      </View>
    )
  }

  renderGeneralInformationPage = () => {
    return (
      <ScrollView style={Style.mainFormContainer}>
        <View>
          <TextInput
            label={i18n.t('catches.form.labels.fish_type')}
            onChangeText={(value) => {
              this.onInputChange({ id: 'fish_type', value })
            }}
          />
          {this.renderError('fish_type')}
        </View>

        <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.fish_dimension')}
              inputIcon="ruler"
              onChangeText={(value) => {
                this.onInputChange({ id: 'fish_dimension', value })
              }}
            />
            {this.renderError('fish_dimension')}
          </View>
          <View style={{ flex: 0.25 }} />
          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.fish_weight')}
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
            <DateTimeInput
              label={i18n.t('catches.form.labels.catch_date')}
              mode="date"
              onChange={(value) => {
                this.onInputChange({ id: 'catch_date', value })
              }}
            />
            {this.renderError('catch_date')}
          </View>
          <View style={{ flex: 0.25 }} />
          <View style={Style.container}>
            <DateTimeInput
              label={i18n.t('catches.form.labels.catch_time')}
              mode="time"
              onChange={(value) => {
                this.onInputChange({ id: 'catch_time', value })
              }}
            />
            {this.renderError('catch_time')}
          </View>
        </View>
      </ScrollView>
    )
  }
  renderDetailedInformationPage = () => {
    return (
      <ScrollView style={Style.mainFormContainer}>
        <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.catch_location_latitude')}
              onChangeText={(value) => {
                this.onInputChange({ id: 'catch_location_latitude', value })
              }}
            />
            {this.renderError('catch_location_latitude')}
          </View>
          <View style={{ flex: 0.25 }} />
          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.catch_location_longitude')}
              onChangeText={(value) => {
                this.onInputChange({ id: 'catch_location_longitude', value })
              }}
            />
            {this.renderError('catch_time')}
          </View>
        </View>

        <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.catch_temperature')}
              inputIcon="thermometer"
              onChangeText={(value) => {
                this.onInputChange({ id: 'catch_temperature', value })
              }}
            />
            {this.renderError('catch_temperature')}
          </View>
          <View style={{ flex: 0.25 }} />

          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.catch_pressure')}
              inputIcon="gauge"
              onChangeText={(value) => {
                this.onInputChange({ id: 'catch_pressure', value })
              }}
            />
            {this.renderError('catch_pressure')}
          </View>
        </View>
        <TextInput
          label={i18n.t('catches.form.labels.fishing_lure')}
          onChangeText={(value) => {
            this.onInputChange({ id: 'fishing_lure', value })
          }}
        />
        {this.renderError('fishing_lure')}

        <TextInput
          label={i18n.t('catches.form.labels.fishing_notes')}
          editable
          maxLength={250}
          multiline
          numberOfLines={4}
          onChangeText={(value) => {
            this.onInputChange({ id: 'fishing_notes', value })
          }}
        />
        {this.renderError('fishing_notes')}
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
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: Colors.red,
    ...Metrics.horizontalPadding,
    ...Metrics.smallVerticalPadding,
    ...Metrics.horizontalMargin,
  },
})

const mapStateToProps = (state) => ({
  weatherConditions: state?.weatherData?.weatherData?.main,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchesFormScreen)
