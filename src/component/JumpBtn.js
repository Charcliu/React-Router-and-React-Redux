import React, { Component } from 'react'
import { withRouter } from 'react-router'

class JumpBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.toHome = this.toHome.bind(this)
  }

  toHome() {
    // 组件没有由 <Route> 直接渲染，那么我们可以使用 withRouter() 高阶组件。这样子就可访问路由信息了
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <input type="button" onClick={this.toHome} value="回到主页" />
      </div>
    )
  }
}

export default withRouter(JumpBtn)
