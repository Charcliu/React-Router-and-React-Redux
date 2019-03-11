import {
  ADD_COUNTER,
  MINUS_COUNTER,
  SET_INPUT_VALUE
} from '../constants/actionTypes'

const counter = {
  count: 0,
  inputValue: 1
}

export default function(state = counter, action) {
  switch (action.type) {
    case ADD_COUNTER: {
      state.count = state.count + action.payload.value
      return {
        ...state
      }
    }
    case MINUS_COUNTER: {
      state.count = state.count - action.payload.value
      return {
        ...state
      }
    }
    case SET_INPUT_VALUE: {
      state.inputValue = action.payload.value
      return {
        ...state
      }
    }
    default:
      return state
  }
}
