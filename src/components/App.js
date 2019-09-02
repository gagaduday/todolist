import React, { Component } from "react";
import AddBar from "./AddBar";
import TodoList from "./TodoList";

export class App extends Component {
  render() {
    return (
      <div className="ui container">
        <AddBar />
        <TodoList />
      </div>
    );
  }
}

export default App;
