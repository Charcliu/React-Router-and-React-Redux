import React, { Component } from 'react'
import { connect } from 'react-redux'

class LearnRedux extends Component {
  render() {
    console.log(this.props.value)
    return (
      <div>
        LearnRedux
        <div>
          <input value="Redux" type="button" onClick={this.props.ADD_TO_CART} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ADD_TO_CART: () =>
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          product: '1',
          quantity: '2',
          unitCost: '3'
        }
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearnRedux)
