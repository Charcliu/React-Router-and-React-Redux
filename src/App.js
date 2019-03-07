import React, { Component } from 'react'
import PrimaryLayout from './component/PrimaryLayout'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store'

import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PrimaryLayout />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
