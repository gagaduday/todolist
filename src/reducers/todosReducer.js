import * as types from "../actions/types";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.content];
    case types.TOGGLE_COMPLETE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case types.HANDLE_DELETE:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default todosReducer;
