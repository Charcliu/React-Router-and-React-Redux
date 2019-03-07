import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
// import UserPage from './UserPage'
import UserAddPage from './UserAddPage'
import NotFound from './NotFound'
import UserLayout from './user/UserLayout'

class PrimaryLayout extends Component {
  render() {
    return (
      <div className="primary-layout">
        <header>Our React Router 4 App</header>
        <main>
          {/* 路由列表里匹配一个路由，则使用 <Switch> 来启用排他路由 */}
          <Switch>
            {/* 使用<Route exact/>达到默认路由的效果 */}
            <Route path="/" exact component={HomePage} />
            <Route path="/users/add" component={UserAddPage} />
            {/* <Route path="/users" component={UserPage} /> */}
            <Route path="/users" component={UserLayout} />
            <Route path="/notfound" component={NotFound} />
            {/* <Switch> 语句中, 其他路由不匹配的情况下，才会渲染重定向组件 */}
            <Redirect to="/notfound" />
          </Switch>
        </main>
      </div>
    )
  }
}

export default PrimaryLayout
