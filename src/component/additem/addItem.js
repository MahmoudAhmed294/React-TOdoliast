import React, { Component } from "react";
import "./addItem.css";
class Additem extends Component {
  state = {
    name: "",
    age: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.additem(this.state);
    this.setState({
      name: "",
      age: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
            <input
              type="text"
              placeholder="Enter name"
              onChange={this.handleChange}
              id="name"
              value={this.state.name}
            />
            <input
              type="number"
              placeholder="Enter age"
              onChange={this.handleChange}
              id="age"
              value={this.state.age}
            />
            <input type="submit" value="Save"  className="Submit" />
      </form>
    );
  }
}

export default Additem;
