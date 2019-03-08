function filterTodo(state, filter) {
  const { byIds, allIds } = state.todos || {}

  const todos =
    allIds && state.todos.allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null

  let filterTodo = todos

  switch (filter) {
    case 'Complete':
      filterTodo = todos.filter(todo => todo.completed)
      break
    case 'UnComplete':
      filterTodo = todos.filter(todo => !todo.completed)
      break
    default:
      break
  }

  return filterTodo
}

export default filterTodo
