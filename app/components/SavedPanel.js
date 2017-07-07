import React, { Component } from "react";

// Importing our dropdown component
import Dropdown from "./Dropdown";
import ActionableListItem from './ActionableListItem.js';
import helpers from "../utils/helpers.js";

class SavedPanel extends Component {
  // Initializing our dropdownOptions on state, setting a default selected option
  // Also setting all of our possible options using the dropdownOptions variable
  constructor() {
    super();
    this.state = {
      dropdownOptions: [],
      selected: { text: 'Select a List' },
      savedTodoList: [],
      sharedID: ''
    };
    // Binding functions to our component 
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  renderList(savedTodoList) {
    return savedTodoList.map((item, index) => {
      return (<ActionableListItem task={item.task} completed={item.completed} handleClick={this.toggleClick} key={index} taskIndex={index} />);
    });
  }

  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
    const _this = this;
    helpers.getListItems(option.value).then((list) => {
      console.log(list);
      _this.setState({ savedTodoList: list.data.listItems });
    });
  }

  componentDidMount() {
    //push the query results into the array to pass along to DropDown to render
    helpers.getSavedList().then(function (response) {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        this.state.dropdownOptions.push({ text: response.data[i].title, value: response.data[i]._id });
      }
    }.bind(this));
  }

  toggleClick(taskIndex) {
    console.log(taskIndex);
    const newToDoList = [...this.state.savedTodoList];
    newToDoList[taskIndex].completed = !newToDoList[taskIndex].completed;
    this.setState({
      savedTodoList: newToDoList,
      output: []
    });
  }

  handleChange(key) {
    return function (e) {
      let state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //sharedID to save
    console.log(this.state.sharedID);
    //db call 
  };

  render() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h5>Saved Lists</h5>
        </div>
        <div className="panel-body">
          <form id="share-form" onSubmit={this.handleSubmit}>
            <input id="shareID-txt" type="text" value={this.state.listName} onChange={this.handleChange('sharedID')} placeholder="User ID" />
            <button id="share-list-btn">Share List</button>
          </form>
          <Dropdown
            options={this.state.dropdownOptions}
            selected={this.state.selected}
            handleSelect={this.handleDropdownSelect}
          />
          {this.renderList(this.state.savedTodoList)}
        </div>
      </div>
    );
  }
}

// Exporting our SavedPanel component
export default SavedPanel;
