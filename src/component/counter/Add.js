import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../../redux/actions/counter'

class Add extends Component {
  handleClick = () => {
    this.props.addCounter(this.props.inputValue)
  }

  render() {
    return <input type="button" value="加" onClick={this.handleClick} />
  }
}

function mapStateToProps(state) {
  const { inputValue } = state.counter
  return { inputValue }
}

export default connect(
  mapStateToProps,
  { addCounter }
)(Add)
