import React, { Component, Fragment } from "react";
import TodoItem from "./component/todoItem/todoItem";
import "./App.css";
import Additem from "./component/additem/addItem";

class App extends Component {
  state = {
    item: [
      { id: 1, name: "mahmoud", age: 25 },
      { id: 2, name: "Ahmed", age: 22 },
      { id: 3, name: "youssf", age: 21 },
    ],
  };
  deleteItem = (id) => {
    let items = this.state.item.filter((item) => {
      return item.id !== id;
    });
    this.setState({ item: items });
  };
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.item;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <Fragment>
        <table className="App">
          <TodoItem data={this.state.item} deleteI={this.deleteItem} />
        </table>
        <Additem additem={this.addItem} />
      </Fragment>
    );
  }
}

export default App;
