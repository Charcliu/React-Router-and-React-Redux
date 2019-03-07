import React, { Component } from 'react'
import UserComments from './userprofile/UserComments'
import UserSettings from './userprofile/UserSettings'
import { Route } from 'react-router-dom'

class UserProfilePage extends Component {
  render() {
    console.log(this.props.match.url) // 输出："/users/fluently"
    console.log(this.props.match.path) // 输出："/users/:userId"
    // path - (string) 用于匹配路径模式。用于构建嵌套的 <Route>
    // url - (string) URL 匹配的部分。 用于构建嵌套的 <Link>
    return (
      <div>
        UserProfilePage:
        {/* comments硬编码的 {'/users/fluently/comments'},无法正确地填充 match.params */}
        <Route
          path={`${this.props.match.url}/comments`}
          component={UserComments}
        />
        <Route
          path={`${this.props.match.path}/settings`}
          component={UserSettings}
        />
      </div>
    )
  }
}

export default UserProfilePage
