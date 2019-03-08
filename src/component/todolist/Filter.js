import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../../redux/actions/todos'

class Filter extends Component {
  handleClick = event => {
    switch (event.target.name) {
      case 'All':
        this.props.setFilter('All')
        break
      case 'Complete':
        this.props.setFilter('Complete')
        break
      case 'UnComplete':
        this.props.setFilter('UnComplete')
        break
      default:
        break
    }
  }

  render() {
    return (
      <>
        <button name="All" onClick={this.handleClick}>
          All
        </button>
        <button name="Complete" onClick={this.handleClick}>
          Complete
        </button>
        <button name="UnComplete" onClick={this.handleClick}>
          UnComplete
        </button>
      </>
    )
  }
}

const mapStateToProps = state => {
  return { activeFilter: state.filter }
}

export default connect(
  mapStateToProps,
  { setFilter }
)(Filter)
