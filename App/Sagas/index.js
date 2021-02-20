import { takeLatest, all } from 'redux-saga/effects'
import { WeatherTypes } from 'App/Stores/Weather/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchWeatherData } from './WeatherSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(WeatherTypes.FETCH_WEATHER_DATA, fetchWeatherData),
  ])
}
