import React, { Component } from "react";

// Importing our dropdown component
import Dropdown from "./Dropdown";
import ActionableListItem from './ActionableListItem.js';

// Defining a list of dropwdown options here
const dropdownOptions = [
  {
    text: "Test List 1",
    value: "SHOW_L1"
  }, {
    text: "Test List 2",
    value: "SHOW_L2"
  }, {
    text: "Test List 3",
    value: "SHOW_L3"
  }
];

var output = [];

class Panel extends Component {
  // Initializing our dropdownOptions on state, setting a default selected option
  // Also setting all of our possible options using the dropdownOptions variable
  constructor() {
    super();
    this.state = {
      dropdownOptions,
      selected: {
        text: "Select a Saved List",
        value: "SELECT_SAVED",
      },
      todoList: [{task: "task1", completed: false}, {task: "task2", completed: false}]
    };
    // Binding handleDropdownSelect to our component since we'll be passing
    // This method to another component
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.renderDrop = this.renderDrop.bind(this);
    this.toggleClick = this.renderDrop.bind(this);
  }
  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
    // Setting this.state.selected to the dropdown option the user clicks
    this.setState({ selected: option });
  }

  toggleClick(taskIndex) {
      console.log(taskIndex);
      const newToDoList = [...this.state.todoList];
      newToDoList[taskIndex].completed = !newToDoList[taskIndex].completed;
      this.setState({
          todoList: newToDoList
      });
  }

  renderDrop() {
    if ( this.state.selected.value == 'SHOW_L1') {
      {this.state.todoList.map((item,index)=>{
            output.push( <ActionableListItem task={item.task} completed={item.completed} handleClick={this.toggleClick} key={index} taskIndex={index}/> );
            return output;
      })}
    }
  }

  render() {

    // var output = null;
    // if ( this.state.selected.value == 'SHOW_LOREM') {
    //   output = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>;
    // } else if (this.state.selected.value == 'SHOW_CAT') {
    //   output = <img src="http://static.flickr.com/34/122530930_6e16f1eb5c.jpg"/>;
    // } else if (this.state.selected.value == 'SHOW_NONE') {
    //   output = null;
    // }

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h5>Saved Lists</h5>
        </div>
        <div className="panel-body">
        {/* Here is where we want to render our conditional content */}
        <Dropdown
          options={this.state.dropdownOptions}
          selected={this.state.selected}
          handleSelect={this.handleDropdownSelect}  
        />
        {this.renderDrop()}
        {output}
        </div>
      </div>
    );
  }
}

// Exporting our Panel component
export default Panel;
