import React, { Component } from "react";
import shortid from "shortid";

class AddBar extends Component {
  state = {
    content: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      content: this.state.content,
      completed: false
    });
    this.setState({
      content: ""
    });
  };

  onInputChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Add Todo</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.content}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddBar;
