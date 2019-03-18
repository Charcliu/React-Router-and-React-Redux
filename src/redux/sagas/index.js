import { put, takeEvery } from 'redux-saga/effects'
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../constants/actionTypes'
import axios from 'axios'

function* fetchNewsTitle() {
  try {
    const response = yield axios.post('/api/blog/getMyBlog')
    if (response.status === 200) {
      yield put({
        type: FETCH_SUCCESS,
        data: response.data
      })
    } else {
      throw new Error('fetch failure')
    }
  } catch (e) {
    yield put({
      type: FETCH_FAILURE
    })
  }
}

export default function* fecthData() {
  yield takeEvery(FETCH_START, fetchNewsTitle)
}
