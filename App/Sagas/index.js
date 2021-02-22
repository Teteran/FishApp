import { takeLatest, all } from 'redux-saga/effects'
import { WeatherTypes } from 'App/Stores/Weather/Actions'
import { fetchWeatherData } from './WeatherSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(WeatherTypes.FETCH_WEATHER_DATA, fetchWeatherData),
  ])
}
