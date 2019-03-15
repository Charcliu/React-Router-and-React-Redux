import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeBtnTextAsync } from '../../redux/actions/middleWareAction'

class Main extends Component {
  handleClick = () => {
    this.props.changeBtnTextAsync('按钮被点击了')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.btnText}</button>
      </div>
    )
  }
}

// 映射store.getState()的数据到middleWareReducer
const mapStateToProps = state => {
  return {
    btnText: state.middleWareReducer.btnText
  }
}

export default connect(
  mapStateToProps,
  { changeBtnTextAsync }
)(Main)
