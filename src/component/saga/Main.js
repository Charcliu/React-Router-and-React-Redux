import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNewsTitle } from '../../redux/actions/sagaAction'
import axios from 'axios'

class Main extends Component {
  handleClick = () => {
    this.props.fetchNewsTitle()
  }

  componentDidMount() {
    axios({
      method: 'post',
      url: '/api/blog/login',
      data: {
        username: 'ChangLau',
        password: 'wff1993lc'
      },
      transformRequest: [
        function(data) {
          let ret = ''
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>获取博客列表</button>
        {this.props.obj.data.map(item => {
          return <div key={item.id}>{item.title}</div>
        })}
      </div>
    )
  }
}

// 映射store.getState()的数据到middleWareReducer
const mapStateToProps = state => {
  return {
    obj: state.sagaReducer
  }
}

export default connect(
  mapStateToProps,
  { fetchNewsTitle }
)(Main)
