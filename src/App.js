import React from "react";
import TodoInput from "./components/TodoInput";
// import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todosList: [],
    };
  }

  /// add todo to list
  addTodo = async (data, status) => {
    let todo = this.state.items;
    //add todo
    const _status = status === "completed" ? "completed" : "uncompleted";
    todo.push({ name: data, status: _status });
    await this.setState({ items: todo });
    //update todolist after add todo
    this.filterData(status);
  };
  /// remove todo from list
  removeTodo = async (value) => {
    //remove todo
    let todos = this.state.items.filter((data) => {
      return data.name !== value.name;
    });
    await this.setState({ items: todos });
    //update list after remove
    this.filterData(value.status);
  };
  // change todo to complete ;
  setCompleteTodo = async (value) => {
    //set complete
    const fItems = this.state.items;
    await fItems.forEach((data, index) => {
      if (data.name === value) {
        data.status = "completed";
      }
    });
    await this.setState({ items: fItems });
  };
  //filter
  filterData = (value) => {
    let item = this.state.items.filter((data) => {
      switch (value) {
        case "all":
          return data;
        case "completed":
          return data.status === "completed";
        case "uncompleted":
          return data.status === "uncompleted";
        default:
          alert("Co loi dang xay ra");
          break;
      }
    });
    this.setState({ todosList: item });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Todo List React</h1>
        </header>
        <TodoInput
          handleFilter={this.filterData.bind(this)}
          handleAddTodo={this.addTodo.bind(this)}
        />
        <TodoList
          handleRemove={this.removeTodo.bind(this)}
          handleSetComplete={this.setCompleteTodo.bind(this)}
          todosList={this.state.todosList}
        />
      </div>
    );
  }
}

export default App;
