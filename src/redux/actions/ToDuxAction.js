export const ADD_TODO_ACTION = "ADD_TODO_ACTION"

export const EDIT_TODO_ACTION = "EDIT_TODO_ACTION"

export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION"

export const addToDo = (todo) => ({
  type: ADD_TODO_ACTION,
  payload: todo,
})

export const editToDo = (id, todo) => ({
  type: EDIT_TODO_ACTION,
  payload: {id, todo},
})

export const deleteToDo = (id) => ({
  type: DELETE_TODO_ACTION,
  payload: id,
})