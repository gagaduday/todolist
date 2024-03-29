import React from "react";
import Todo from "./Todo";
import {
  handleDelete,
  toggleComplete,
  handleEdit,
  handleShow,
  showTodos
} from "../actions";
import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    const {
      handleDelete,
      toggleComplete,
      handleShow,
      todoToShow,
      todos
    } = this.props;
    let filteredTodo = [];
    if (todoToShow === showTodos.SHOW_ALL) {
      filteredTodo = [...todos];
    } else if (todoToShow === showTodos.SHOW_COMPLETED) {
      filteredTodo = todos.filter(todo => todo.completed);
    } else {
      filteredTodo = todos.filter(todo => !todo.completed);
    }

    const todoList = filteredTodo.length ? (
      filteredTodo.map(todo => {
        return (
          <Todo
            key={todo.id}
            content={todo.content}
            toggleComplete={() => toggleComplete(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
            todo={todo}
          />
        );
      })
    ) : (
      <p style={{ color: "red", textAlign: "center", fontSize: "15px" }}>
        You have no todo left
      </p>
    );

    const todoLeft =
      todoToShow === showTodos.SHOW_ALL ? (
        <div style={{ marginBottom: "12px" }}>
          todos left: {todos.filter(todo => !todo.completed).length}
        </div>
      ) : null;

    return (
      <div>
        {todoList}
        {todoLeft}
        <div>
          <button
            className="ui pink button"
            onClick={() => handleShow(showTodos.SHOW_ALL)}
          >
            ALL
          </button>
          <button
            className="ui pink button"
            onClick={() => handleShow(showTodos.SHOW_ACTIVE)}
          >
            ACTIVE
          </button>
          <button
            className="ui pink button"
            onClick={() => handleShow(showTodos.SHOW_COMPLETED)}
          >
            COMPLETED
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    todoToShow: state.todoToShow
  };
};

export default connect(
  mapStateToProps,
  { handleDelete, toggleComplete, handleShow, showTodos }
)(TodoList);
