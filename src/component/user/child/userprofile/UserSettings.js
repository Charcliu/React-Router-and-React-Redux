import React, { Component } from 'react'

class UserSettings extends Component {
  render() {
    return <div>UserSettings:{this.props.match.params.userId}</div>
  }
}

export default UserSettings
