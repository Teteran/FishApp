import axios from 'axios'
import { Config } from 'App/Config'
import { weatherApiClient } from 'App/Clients/WeatherApiClient'

const params = {
  appid: Config.WEATHER_API_KEY,
  lang: 'pl',
  units: 'metric',
}

function fetchWeatherData(lat, lon) {
  return weatherApiClient
    .get('/weather', { params: { ...params, lat, lon } })
    .then((response) => ({ response }))
    .catch((error) => ({ error }))
}

export const weatherApiService = {
  fetchWeatherData,
}
