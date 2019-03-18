import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: []
}

const sagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default sagaReducer
