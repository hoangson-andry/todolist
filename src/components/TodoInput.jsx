import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.selectRef = React.createRef();
  }
  addTodo = (data) => {
    data.preventDefault();
    if (this.inputRef.current.value === "") {
      alert("vui long nhap todo");
    } else {
      this.props.handleAddTodo(
        this.inputRef.current.value,
        this.selectRef.current.value
      );
      /// set current state to handle delete
      if (localStorage.getItem("currentState") === null) {
        localStorage.setItem("currentState", "all");
      }
    }
  };

  changeStatus = (data) => {
    this.props.handleFilter(this.selectRef.current.value);
    /// set current state to handle delete
    localStorage.setItem("currentState", "this.selectRef.current.value");
  };
  render() {
    return (
      <React.Fragment>
        <form onChange={this.changeStatus}>
          <input
            ref={this.inputRef}
            type="text"
            className="todo-input"
            maxLength="40"
          />
          <button className="todo-button" onClick={this.addTodo} type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select ref={this.selectRef} name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default TodoInput;
