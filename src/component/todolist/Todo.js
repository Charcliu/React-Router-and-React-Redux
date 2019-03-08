import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux/actions/todos'

class Todo extends Component {
  handleClick = () => {
    this.props.toggleTodo(this.props.todo.id)
  }

  render() {
    return (
      <li className="todo-item" onClick={this.handleClick}>
        {this.props.todo && this.props.todo.completed ? '👌' : '👋'}{' '}
        <span className="todo-item__text--completed">
          {this.props.todo.content}
        </span>
      </li>
    )
  }
}

export default connect(
  null,
  { toggleTodo }
)(Todo)
