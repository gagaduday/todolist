import { HANDLE_SHOW, SHOW_ALL } from "../actions/types";
import { showTodos } from "../actions";

const todoToShowReducer = (state = showTodos.SHOW_ALL, action) => {
  switch (action.type) {
    case HANDLE_SHOW:
      return action.content;
    default:
      return state;
  }
};

export default todoToShowReducer;
