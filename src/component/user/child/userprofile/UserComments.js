import React, { Component } from 'react'

class UserComments extends Component {
  render() {
    return <div>UserComments:{this.props.match.params.userId}</div>
  }
}

export default UserComments
