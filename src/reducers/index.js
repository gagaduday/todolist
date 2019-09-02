import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import todoToShowReducer from "./todosToShowReducer";

export default combineReducers({
  todos: todosReducer,
  todoToShow: todoToShowReducer
});
