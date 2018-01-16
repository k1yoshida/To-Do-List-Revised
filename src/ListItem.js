import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      tempItem: ""
    };
  }
  toggleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };
  handleItemSave = () => {
    this.props.saveItem(this.props.index, this.state.tempItem);
    this.toggleEditing();
  };
  handleItemChange = event => {
    this.setState({
      tempItem: event.target.value
    });
    const tempItem = this.state.tempItem;
    console.log(tempItem);
  };

  render() {
    const isEditing = this.state.isEditing;
    if (isEditing) {
      return (
        <li>
          <input
            type="text"
            value={this.state.tempItem}
            onChange={this.handleItemChange}
            autofocus
          />
          <button onClick={this.handleItemSave}> Save </button>
        </li>
      );
    } else if (!isEditing) {
      return (
        <li>
          {this.props.itemValue}
          <button onClick={this.toggleEditing}>Edit</button>
          <button onClick={() => this.props.deleteItem(this.props.index)}>
            Remove
          </button>
        </li>
      );
    }
  }
}

export default ListItem;
