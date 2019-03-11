import React, { Component } from 'react'
import { connect } from 'react-redux'
import { minusCounter } from '../../redux/actions/counter'

class Minus extends Component {
  handleClick = () => {
    this.props.minusCounter(this.props.inputValue)
  }

  render() {
    return <input type="button" value="减" onClick={this.handleClick} />
  }
}

function mapStateToProps(state) {
  const { inputValue } = state.counter
  return { inputValue }
}

export default connect(
  mapStateToProps,
  { minusCounter }
)(Minus)
