import {
  ADD_TODO_ACTION,
  DELETE_TODO_ACTION,
  EDIT_TODO_ACTION
} from "../actions/ToDuxAction"

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
    case EDIT_TODO_ACTION:
      return {
        ...state,
        todos: state.todos.map((item) =>
          (item.id === action.payload.id ? action.payload.todo : item)
        )
      }
    case DELETE_TODO_ACTION:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload)
      }
    default:
      return state
  }
}