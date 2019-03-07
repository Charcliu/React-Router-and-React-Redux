import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserNav extends Component {
  render() {
    return (
      <>
        <Link to="/users">To BrowseUser Page</Link>
        <br />
        <Link to="/users/add">To UserAdd Page</Link>
        <br />
        <Link to="/users/fluently">To UserProfile Page</Link>
      </>
    )
  }
}

export default UserNav
