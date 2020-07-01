import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  removeTodo = (data) => {
    this.props.handleRemove(data);
  };
  setCompleteTodo = (data) => {
    this.props.handleSetComplete(data);
  };
  render() {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {this.props.todosList.map((data, index) => {
            return (
              <Todo
                handleRemove={this.removeTodo}
                handleSetComplete={this.setCompleteTodo}
                data={data}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
