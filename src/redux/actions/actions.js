import { ADD_TODO, REMOVE_TODO, MARK_TODO_COMPLETED } from "../actionTypes";

let maxTodoId = 0;
export const addNewTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: ++maxTodoId,
    title: title,
    completed: 0,
  },
  
});

export const removeToDo = (todoId) => ({
  type: REMOVE_TODO,
  payload: { id: todoId },
});

export const markTodoCompleted = (id) => ({
  type: MARK_TODO_COMPLETED,
  payload: {
    id,
  },
});
