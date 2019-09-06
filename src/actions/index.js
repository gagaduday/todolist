import * as types from "./types";

let todoId = 0;
export const addTodo = content => {
  return {
    type: types.ADD_TODO,
    content,
    completed: false,
    id: todoId++
  };
};

export const handleEdit = (id, content) => {
  return {
    type: types.HANDLE_EDIT,
    id,
    content
  };
};

export const handleShow = content => ({
  type: types.HANDLE_SHOW,
  content
});

export const toggleComplete = id => ({
  type: types.TOGGLE_COMPLETE,
  id
});

export const handleDelete = id => ({
  type: types.HANDLE_DELETE,
  id
});

export const showTodos = {
  SHOW_ALL: types.SHOW_ALL,
  SHOW_ACTIVE: types.SHOW_ACTIVE,
  SHOW_COMPLETED: types.SHOW_COMPLETED
};
