// 应用中间件applyMiddleware
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// 日志中间件
import logger from 'redux-logger'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, promiseMiddleware, sagaMiddleware, logger)
  )
)
sagaMiddleware.run(mySaga)

export default store
