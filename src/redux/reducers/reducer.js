// import * as actionTypes from "./actionTypes";
import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_TODO_COMPLETED,
} from "../constants/actionTypes";
import { getMaxIdFromArray } from "../../shared/utility";

const initialState = {
  items: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipiscing",
      completed: 1,
    },
    {
      id: 2,
      title: "Semper viverra nam libero justo laoreet sit amet",
      completed: 0,
    },
    {
      id: 3,
      title: "Vestibulum morbi blandit cursus risus at ultrices",
      completed: 0,
    },
  ],
};

const addNewTodoItem = (state, action) => {
  const newTodoItem = {
    id: getMaxIdFromArray(state.items),
    title: action.title,
    completed: 0,
  };

  return {
    ...state,
    items: [...state.items, newTodoItem],
  };
};

const removeTodoItem = (state, action) => {
  return {
    ...state,
    items: state.items.filter((todo) => todo.id !== action.todoId),
  };
};

const markTodoAsCompleted = (state, action) => {
  console.log("m here");
  console.log(action);
  return {
    ...state,
    items: state.items.map((todo) =>
      todo.id === action.todoId
        ? {
            ...todo,
            completed: 1,
          }
        : todo
    ),
  };
};

const rootReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return addNewTodoItem(state, action);
    case REMOVE_TODO:
      return removeTodoItem(state, action);
    case MARK_TODO_COMPLETED:
      return markTodoAsCompleted(state, action);
    default:
      return state;
  }
};

export default rootReducer;
