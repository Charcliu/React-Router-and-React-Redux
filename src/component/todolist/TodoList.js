import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import filterTodo from '../../redux/getter/select'

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
  const todos = filterTodo(state, state.filter)

  return { todos }
}

export default connect(mapStateToProps)(TodoList)
