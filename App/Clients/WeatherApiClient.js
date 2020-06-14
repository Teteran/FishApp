import axios from 'axios'
import { Config } from 'App/Config'

export const weatherApiClient = axios.create({
  baseURL: Config.WEATHER_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})
