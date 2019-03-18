import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import counter from './counter'
import middleWareReducer from './middleWareReducer'
import sagaReducer from './sagaReducer'

const allReducers = {
  todos,
  filter,
  counter,
  middleWareReducer,
  sagaReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer
