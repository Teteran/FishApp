/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { WeatherTypes } from './Actions'

export const fetchWeatherDataLoading = (state) => ({
  ...state,
  weatherDataIsLoading: true,
  weatherDataErrorMessage: null,
})

export const fetchWeatherDataSuccess = (state, { weatherData }) => ({
  ...state,
  weatherData: weatherData,
  weatherDataIsLoading: false,
  weatherDataErrorMessage: null,
})

export const fetchWeatherDataFailure = (state, { errorMessage }) => ({
  ...state,
  weatherData: {},
  weatherDataIsLoading: false,
  weatherDataErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [WeatherTypes.FETCH_WEATHER_DATA_LOADING]: fetchWeatherDataLoading,
  [WeatherTypes.FETCH_WEATHER_DATA_SUCCESS]: fetchWeatherDataSuccess,
  [WeatherTypes.FETCH_WEATHER_DATA_FAILURE]: fetchWeatherDataFailure,
})
