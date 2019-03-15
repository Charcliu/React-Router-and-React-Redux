import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import counter from './counter'
import middleWareReducer from './middleWareReducer'

const allReducers = {
  todos,
  filter,
  counter,
  middleWareReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer
