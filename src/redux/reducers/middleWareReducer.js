import { CHANGE_BTN_TEXT } from '../constants/actionTypes'
import { handleActions } from 'redux-actions'

const initialState = {
  btnText: '登陆CoffeeCola'
}

// const pageMainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE_BTN_TEXT:
//       return {
//         ...state,
//         btnText: action.payload
//       }
//     default:
//       return state
//   }
// }

// handleActions
const pageMainReducer = handleActions(
  {
    [CHANGE_BTN_TEXT]: {
      next(state, action) {
        return {
          ...state,
          btnText: action.payload
        }
      },
      throw(state) {
        return state
      }
    }
  },
  initialState
)

export default pageMainReducer
