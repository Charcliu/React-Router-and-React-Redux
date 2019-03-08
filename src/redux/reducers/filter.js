const filter = 'All'

export default function(state = filter, action) {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload.filter
    }
    default:
      return state
  }
}
