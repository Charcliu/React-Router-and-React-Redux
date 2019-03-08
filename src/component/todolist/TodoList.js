import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos && this.props.todos.length
          ? this.props.todos.map((todo, index) => {
              return <Todo key={`todo-${todo.id}`} todo={todo} />
            })
          : 'No todos, yay!'}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {}

  let todos =
    allIds && state.todos.allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null

  switch (state.filter) {
    case 'Complete':
      todos = todos.filter(todo => todo.completed)
      break
    case 'UnComplete':
      todos = todos.filter(todo => !todo.completed)
      break
    default:
      break
  }

  return { todos }
}

export default connect(mapStateToProps)(TodoList)
