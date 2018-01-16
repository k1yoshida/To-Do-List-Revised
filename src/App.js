import React, { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  createList = event => {
    event.preventDefault();
    this.setState({
      lists: [...this.state.lists, { ListName: "New List", items: [] }]
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>Kari Ann's To-Do List App</h1>
          <button onClick={this.createList}>Create List</button>
        </header>
        <div className="ListGroup">
          {this.state.lists.map((list, index) => (
            <List
              lists={this.state.lists}
              listName={this.state.lists[index].ListName}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
