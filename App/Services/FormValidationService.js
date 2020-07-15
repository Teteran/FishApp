import validatejs from 'validate.js'

import { validationDictionary } from 'App/Config/FormValidationDictionary'

export const validationService = {
  onInputChange,
  getInputValidationState,
  validateInput,
  getFormValidation,
  getInputValue,
  mapFormInputsToObject,
}

function onInputChange({ id, value, cb = () => {} }) {
  const { inputs } = this.state
  this.setState(
    {
      inputs: {
        ...inputs,
        [id]: getInputValidationState({
          input: inputs[id],
          value,
        }),
      },
    },
    cb
  )
}

function getInputValue(id) {
  const { inputs } = this.state
  return inputs[id].value
}

function getInputValidationState({ input, value }) {
  return {
    ...input,
    value,
    errorLabel: input.optional ? null : validateInput({ type: input.type, value }),
  }
}

function validateInput({ type, value }) {
  const result = validatejs(
    {
      [type]: value,
    },
    {
      [type]: validationDictionary[type],
    }
  )

  if (result) {
    return result[type][0]
  }

  return null
}

function getFormValidation() {
  const { inputs } = this.state

  const updatedInputs = {}

  for (const [key, input] of Object.entries(inputs)) {
    updatedInputs[key] = getInputValidationState({
      input,
      value: input.value,
    })
  }

  this.setState({
    inputs: updatedInputs,
  })
}

function mapFormInputsToObject(inputs) {
  let tmp = {}
  for (const [key, { value }] of Object.entries(inputs)) {
    if (value === 0) {
      tmp[key] = 0
      continue
    }
    tmp[key] = value || ''
  }
  return tmp
}
