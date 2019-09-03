import React from "react";
import "./index.css";

const Todo = props => {
  return (
    <div className="todo">
      <button className="ui blue basic button" onClick={props.toggleComplete}>
        O
      </button>
      <button className="ui red basic button" onClick={props.handleDelete}>
        X
      </button>
      <div
        className={`todo-content-${
          props.todo.completed ? "incomplete" : "completed"
        }`}
      >
        {props.content}
      </div>
    </div>
  );
};

export default Todo;
