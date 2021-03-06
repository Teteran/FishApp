import { ScrollView, StyleSheet, View } from 'react-native'
import { Colors, Helpers, Metrics } from 'App/Theme'
import { DateTimeInput, NumericInput, Text, TextInput, Button, SelectInput } from 'App/Components'
import i18n from 'App/Services/i18n'
import Geolocation from '@react-native-community/geolocation'
import React from 'react'
import Style from './CatchesScreenStyle'
import { connect } from 'react-redux'
import { Config } from 'App/Config'
import { validationService } from 'App/Services/FormValidationService'
import CatchesAction from 'App/Stores/Catches/Actions'
import { ApplicationStyles } from 'App/Theme'
const screensQuantity = 2

class CatchesFormScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedScreenIndex: 0,
      inputs: {
        fish_type: {
          type: 'FishType',
          value: '',
        },
        fish_dimension: {
          type: 'FishDimension',
          value: '-',
        },
        fish_weight: {
          type: 'FishWeight',
          value: '-',
        },
        catch_date: {
          type: 'generic',
          value: new Date(),
        },
        catch_time: {
          type: 'generic',
          value: new Date(),
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
    this.getInputValue = validationService.getInputValue.bind(this)
    this.mapFormInputsToObject = validationService.mapFormInputsToObject.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    Geolocation.getCurrentPosition((info) => {
      const { latitude, longitude } = info.coords
      this.onInputChange({ id: 'catch_location_latitude', value: latitude })
      this.onInputChange({ id: 'catch_location_longitude', value: longitude })
      this.onInputChange({ id: 'catch_temperature', value: this.props.weatherConditions?.temp })
      this.onInputChange({ id: 'catch_pressure', value: this.props.weatherConditions?.pressure })
    })
  }

  submit() {
    const { inputs } = this.state
    this.props.addNewCatch(this.mapFormInputsToObject(inputs))
    this.props.navigation.goBack()
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

     <ScrollView style={[ApplicationStyles.card]}>
            {this.renderGeneralInformationPage()}
         
            {this.renderDetailedInformationPage()}
            <Button
                      title={i18n.t('buttons.submit')}
                      style={{ flex: 0.5, backgroundColor: Colors.primary, }}
                      buttonTitleStyle={{color: Colors.backgroundColor}}
                      onPress={() => {
                        this.submit()
                      }}
                    />
</ScrollView>
    )
  }

  renderGeneralInformationPage = () => {
    return (
      <>
        <View>
          <SelectInput
            label={i18n.t('catches.form.labels.fish_type')}
            value={this.getInputValue('fish_type')}
            onChangeValue={(value) => {
              this.onInputChange({ id: 'fish_type', value })
            }}
            data={Config.FISH_TYPES}
          />
          {this.renderError('fish_type')}
        </View>

        <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.fish_dimension')}
              inputIcon="ruler"
              value={this.getInputValue('fish_dimension')}
              onChangeValue={(value) => {
                this.onInputChange({ id: 'fish_dimension', value })
              }}
              wheelsConfig={[
                { min: 0, max: 10, step: 1, unit: 'm' },
                { min: 0, max: 100, step: 1, unit: 'cm' },
              ]}
            />
            {this.renderError('fish_dimension')}
          </View>
          <View style={{ flex: 0.25 }} />
          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.fish_weight')}
              inputIcon="weight-kilogram"
              value={this.getInputValue('fish_weight')}
              onChangeValue={(value) => {
                this.onInputChange({ id: 'fish_weight', value })
              }}
              wheelsConfig={[
                { min: 0, max: 100, step: 1, unit: 'kg' },
                { min: 0, max: 1000, step: 50, unit: 'g' },
              ]}
            />
            {this.renderError('fish_weight')}
          </View>
        </View>

        <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
          <View style={Style.container}>
            <DateTimeInput
              label={i18n.t('catches.form.labels.catch_date')}
              mode="date"
              value={this.getInputValue('catch_date')}
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
              value={this.getInputValue('catch_time')}
              onChange={(value) => {
                this.onInputChange({ id: 'catch_time', value })
              }}
            />
            {this.renderError('catch_time')}
          </View>
        </View>
        </>
    )
  }
  renderDetailedInformationPage = () => {
    return (
   <>
        <View style={[Helpers.rowCenter, Helpers.mainSpaceAround]}>
          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.catch_location_latitude')}
              value={this.getInputValue('catch_location_latitude')}
              onChangeValue={(value) => {
                this.onInputChange({ id: 'catch_location_latitude', value })
              }}
            />
            {this.renderError('catch_location_latitude')}
          </View>
          <View style={{ flex: 0.25 }} />
          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.catch_location_longitude')}
              value={this.getInputValue('catch_location_longitude')}
              onChangeValue={(value) => {
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
              value={this.getInputValue('catch_temperature')}
              onChangeValue={(value) => {
                this.onInputChange({ id: 'catch_temperature', value })
              }}
              wheelsConfig={[{ min: 0, max: 45, step: 0.5, unit: '°C' }]}
              canBeZero
            />
            {this.renderError('catch_temperature')}
          </View>
          <View style={{ flex: 0.25 }} />

          <View style={Style.container}>
            <NumericInput
              label={i18n.t('catches.form.labels.catch_pressure')}
              inputIcon="gauge"
              value={this.getInputValue('catch_pressure')}
              onChangeValue={(value) => {
                this.onInputChange({ id: 'catch_pressure', value })
              }}
              wheelsConfig={[{ min: 800, max: 1100, step: 0.5, unit: 'hPa' }]}
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
        </>
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

const mapDispatchToProps = (dispatch) => ({
  addNewCatch: (newCatch) => dispatch(CatchesAction.addNewCatch(newCatch)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchesFormScreen)
