import {
  ADD_COUNTER,
  MINUS_COUNTER,
  SET_INPUT_VALUE
} from '../constants/actionTypes'

export const addCounter = value => ({
  type: ADD_COUNTER,
  payload: {
    value: value
  }
})

export const minusCounter = value => ({
  type: MINUS_COUNTER,
  payload: {
    value: value
  }
})

export const setInputValue = value => ({
  type: SET_INPUT_VALUE,
  payload: {
    value: value
  }
})
