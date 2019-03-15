import { CHANGE_BTN_TEXT } from '../constants/actionTypes'
import axios from 'axios'
import { createAction } from 'redux-actions'

// export const changeBtnText = text => {
//   return {
//     type: CHANGE_BTN_TEXT,
//     payload: text
//   }
// }

// createAction创建Action
export const changeBtnText = createAction(CHANGE_BTN_TEXT, text => text)

// redux-promise
export const changeBtnTextAsync = text => {
  // return {
  //   type: CHANGE_BTN_TEXT,
  //   payload: postRequestParam('/api/blog/login', {
  //     username: 'ChangLau',
  //     password: 'wff1993lc'
  //   })
  // }

  return postRequestParam('/api/blog/login', {
    username: 'ChangLau',
    password: 'wff1993lc'
  })
    .then(response => ({
      type: CHANGE_BTN_TEXT,
      payload: response.statusText
    }))
    .catch(err => ({
      type: CHANGE_BTN_TEXT
    }))
}

// redux-thunk
// export const changeBtnTextAsync = text => {
//   return (dispatch, getState) => {
//     console.log(getState(), text)
//     dispatch(changeBtnText('登陆中...'))
//     postRequestParam('/api/blog/login', {
//       username: 'ChangLau',
//       password: 'wff1993lc'
//     })
//       .then(() => {
//         dispatch(changeBtnText('登陆成功'))
//       })
//       .catch(() => {
//         dispatch(changeBtnText('登陆失败'))
//       })
//   }
// }

function postRequestParam(url, param) {
  return axios({
    method: 'post',
    url: url,
    data: param,
    transformRequest: [
      function(data) {
        let ret = ''
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
