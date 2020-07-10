import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CatchesTypes } from './Actions'
import { UtilService } from 'App/Services'
export const addNewCatch = (state, { newCatch }) => {
  Object.assign(newCatch, { id: UtilService.create_UUID() })

  return {
    ...state,
    catches: [...state.catches, newCatch],
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [CatchesTypes.ADD_NEW_CATCH]: addNewCatch,
})
