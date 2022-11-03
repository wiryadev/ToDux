import { ADD_TODO_ACTION } from "../actions/ToDuxAction"

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      }
    default:
      return state
  }
}