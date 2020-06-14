import axios from 'axios'
import { Config } from 'App/Config'
import { weatherApiClient } from 'App/Clients/WeatherApiClient'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

function fetchWeatherData() {
  return weatherApiClient
    .get('444')
    .then((response) => {
      if (in200s(response.status)) {
        return response.data
      }

      return null
    })
    .catch((error) => console.log(error))
}

export const weatherApiService = {
  fetchWeatherData,
}
