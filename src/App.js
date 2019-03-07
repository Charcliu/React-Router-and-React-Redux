import React, { Component } from 'react'
import PrimaryLayout from './component/PrimaryLayout'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout />
      </BrowserRouter>
    )
  }
}

export default App
