export const validationDictionary = {
  CatchDimension: {
    presence: {
      allowEmpty: false,
      message: 'This is required',
    },
    numericality: {
      greaterThan: 0,
    },
  },
  FishType: {
    presence: {
      allowEmpty: false,
      message: 'This is required',
    },
  },
}
