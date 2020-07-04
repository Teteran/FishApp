import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  addNewCatch: ['newCatch'],
})

export const CatchesTypes = Types
export default Creators
