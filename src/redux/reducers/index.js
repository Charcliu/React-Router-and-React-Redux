import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import counter from './counter'

const allReducers = {
  todos,
  filter,
  counter
}

const rootReducer = combineReducers(allReducers)

export default rootReducer
