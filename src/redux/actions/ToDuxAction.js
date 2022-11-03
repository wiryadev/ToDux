export const ADD_TODO_ACTION = "ADD_TODO_ACTION"

export const addToDo = (todo) => ({
  type: ADD_TODO_ACTION,
  payload: todo,
})