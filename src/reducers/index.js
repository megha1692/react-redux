import * as typo from "../constants/action-types";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case typo.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case typo.DELETE_TODO:
      let updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
};

export default todos;
