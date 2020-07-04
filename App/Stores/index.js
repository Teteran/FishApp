import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as WeatherDataReducer } from './Weather/Reducers'
import { reducer as CatchesReducer } from './Catches/Reducers'
export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
    weatherData: WeatherDataReducer,
    catches: CatchesReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
