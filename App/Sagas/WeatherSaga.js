import { put, call } from 'redux-saga/effects'
import WeatherActions from 'App/Stores/Weather/Actions'
import { weatherApiService } from 'App/Services/WeatherApiService'

export function* fetchWeatherData() {
  yield put(WeatherActions.fetchWeatherDataLoading())

  const weatherData = yield call(weatherApiService.fetchWeatherData)
  if (weatherData) {
    yield put(WeatherActions.fetchWeatherDataSuccess(weatherData))
  } else {
    yield put(
      WeatherActions.fetchWeatherDataFailure('There was an error while fetching weather data.')
    )
  }
}
