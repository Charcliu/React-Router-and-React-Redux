import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'

const allReducers = {
  todos,
  filter
}

const rootReducer = combineReducers(allReducers)

export default rootReducer
