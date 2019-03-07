import React, { Component } from 'react'
import UserNav from './UserNav'
import BrowseUsersPage from './child/BrowseUserPage'
import UserProfilePage from './child/UserProfilePage'
import UserAddPage from '../UserAddPage'
import EditUser from './child/userprofile/EditUser'
import { Route, Switch } from 'react-router-dom'

class UserLayout extends Component {
  render() {
    console.log(this.props.match.url) // 输出："/users"
    console.log(this.props.match.path) // 输出："/users"
    return (
      <div className="user-sub-layout">
        <aside>
          <UserNav />
        </aside>
        <div className="primary-content">
          <Switch>
            <Route
              path={this.props.match.path}
              exact
              component={BrowseUsersPage}
            />
            <Route
              path={`${this.props.match.path}/add`}
              component={UserAddPage}
            />
            <Route
              path={`${this.props.match.path}/:userId/edit`}
              component={EditUser}
            />
            <Route
              path={`${this.props.match.path}/:userId`}
              component={UserProfilePage}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default UserLayout
