import React, { Component } from 'react'
import JumpBtn from './JumpBtn'
class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        User Add Page!
        <JumpBtn />
      </div>
    )
  }
}

export default HomePage
