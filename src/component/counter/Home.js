import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setInputValue } from '../../redux/actions/counter'
import Add from './Add'
import Minus from './Minus'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.inputValue }
  }

  handleChange = event => {
    let value = Number(event.target.value)
    this.setState(
      {
        value: value
      },
      () => {
        this.props.setInputValue(this.state.value)
      }
    )
  }

  render() {
    return (
      <div>
        <div>
          {this.props.count}-{this.props.inputValue}
        </div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Add />
        <Minus />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { count, inputValue } = state.counter
  return { count, inputValue }
}

export default connect(
  mapStateToProps,
  { setInputValue }
)(Home)
