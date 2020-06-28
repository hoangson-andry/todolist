import React, { Component } from "react";

class Todo extends Component {
  removeTodo = () => {
    this.props.handleRemove(this.props.data);
  };
  setComplete = () => {
    this.props.handleSetComplete(this.props.data.name);
  };
  render() {
    const style =
      this.props.data.status === "completed"
        ? { textDecoration: "Line-through" }
        : { textDecoration: "none" };
    return (
      <React.Fragment>
        <li style={style} className="todo-item">
          {this.props.data.name}
          <div className="todo-tools">
            <div className="todo-complete" onClick={this.setComplete}>
              Done
            </div>
            <div className="remove" onClick={this.removeTodo}>
              X
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default Todo;
