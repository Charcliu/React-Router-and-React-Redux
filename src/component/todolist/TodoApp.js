import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Filter from './Filter'

class TodoApp extends Component {
  render() {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <Filter />
      </div>
    )
  }
}

export default TodoApp
