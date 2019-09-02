import React from "react";

const Todo = props => {
  return (
    <div className="collection">
      <button onClick={props.handleDelete}>X</button>
      {props.content}
      <button onClick={props.toggleComplete}>O</button>
    </div>
  );
};

export default Todo;
