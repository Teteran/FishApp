import { put, call } from 'redux-saga/effects'
import WeatherActions from 'App/Stores/Weather/Actions'
import { weatherApiService } from 'App/Services/WeatherApiService'

export function* fetchWeatherData(action) {
  yield put(WeatherActions.fetchWeatherDataLoading())

  const { response, error } = yield call(weatherApiService.fetchWeatherData, action.lat, action.lon)

  if (response) {
    yield put(WeatherActions.fetchWeatherDataSuccess(response.data))
  } else {
    yield put(WeatherActions.fetchWeatherDataFailure(error))
  }
}
