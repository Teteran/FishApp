import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CatchesTypes } from './Actions'

export const addNewCatch = (state, { newCatch }) => ({
  ...state,
  catches: [...state.catches, newCatch],
})

export const reducer = createReducer(INITIAL_STATE, {
  [CatchesTypes.ADD_NEW_CATCH]: addNewCatch,
})
