import React from "react";
import { connect } from "react-redux";
import { handleEdit } from "../actions";
import "./index.css";

class Todo extends React.Component {
  state = {
    content: this.props.content,
    isInEditMode: false
  };

  onRenderContent = () => {
    return (
      <div
        className={`todo-content-${
          this.props.todo.completed ? "incomplete" : "completed"
        }`}
      >
        {this.props.content}
      </div>
    );
  };

  onChangeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  onUpdateContent = () => {
    this.setState({
      isInEditMode: false,
      content: this.refs.theTextInput.value
    });
  };

  onContentChange = () => {
    this.props.handleEdit(this.props.todo.id, this.refs.theTextInput.value);
    this.setState({
      isInEditMode: false
    });
  };

  onRenderEditView = () => {
    return (
      <div className="ui input">
        <input
          type="text"
          defaultValue={this.props.content}
          ref="theTextInput"
        />
        <button className="ui facebook button" onClick={this.onChangeEditMode}>
          CANCEL
        </button>
        <button className="ui youtube button" onClick={this.onContentChange}>
          SUBMIT
        </button>
      </div>
    );
  };

  onRenderEdit = () => {
    return this.state.isInEditMode
      ? this.onRenderEditView()
      : this.onRenderContent();
  };

  render() {
    return (
      <div className="todo">
        <button
          className="ui blue basic button"
          onClick={this.props.toggleComplete}
        >
          COMPLETE
        </button>
        <button
          className="ui teal basic button"
          onClick={this.onChangeEditMode}
        >
          EDIT
        </button>
        <button
          className="ui red basic button"
          onClick={this.props.handleDelete}
        >
          DELETE
        </button>
        {this.onRenderEdit()}
      </div>
    );
  }
}

export default connect(
  null,
  { handleEdit }
)(Todo);
