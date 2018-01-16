import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isEditingTitle: false,
      tempName: "temp name",
      tempValue: "",
      term: ""
    };
  }

  toggleEditTitle = () => {
    this.setState({
      isEditingTitle: !this.state.isEditingTitle
    });
  };

  handleValueChange = event => {
    this.setState({
      tempName: event.target.value
    });
    console.log(this.state.tempName);
  };

  handleItemAdd = event => {
    this.setState({
      tempValue: event.target.value
    });
  };

  editTitle = (lists, index, tempName) => {
    lists.splice(index, 1, { ListName: tempName, items: this.state.items });
  };

  addItem = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [
        ...this.state.items,
        { itemValue: this.state.tempValue, isEditing: false }
      ]
    });
    console.log(this.state.items);
  };
  deleteItem = index => {
    const items = this.state.items;
    items.splice(index, 1);
    this.setState({
      items: items
    });
    console.log(index);
  };
  saveItem = (index, tempItem) => {
    const items = this.state.items;
    items.splice(index, 1, {
      itemValue: tempItem,
      isEditing: false
    });
    this.setState({
      term: "",
      items: items
    });
    console.log(this.state.tempItem);
  };

  render() {
    const isEditingTitle = this.state.isEditingTitle;

    return (
      <div>
        {isEditingTitle ? (
          <div>
            <form onSubmit={this.editTitle}>
              <input
                type="text"
                value={this.state.tempValue}
                onChange={this.handleValueChange}
                autofocus
              />
              <button onClick={this.toggleEditTitle}>Save</button>
            </form>
          </div>
        ) : (
          <div>
            <h3>{this.props.listName}</h3>
            <button onClick={this.toggleEditTitle}>Edit</button>
          </div>
        )}
        <form>
          <input onChange={this.handleItemAdd} />
          <button onClick={this.addItem}> Add Item</button>
        </form>
        {this.state.items.map((item, index) => (
          <ListItem
            items={this.state.items}
            itemValue={this.state.items[index].itemValue}
            index={index}
            deleteItem={this.deleteItem}
            saveItem={this.saveItem}
            handleItemChange={this.handleItemChange}
          />
        ))}
      </div>
    );
  }
}

export default List;
