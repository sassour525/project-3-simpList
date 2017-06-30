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

class SavedPanel extends Component {
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
      todoList: [{task: "Saved-task1", completed: false}, {task: "Saved-task2", completed: false}],
      output: []
    };
    // Binding handleDropdownSelect to our component since we'll be passing
    // This method to another component
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.renderDrop = this.renderDrop.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }
  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
    // Setting this.state.selected to the dropdown option the user clicks
    this.setState({ selected: option, output: [] });
  }

  componentDidMount() {
    //DB call to get dropdownOptions
    //push the query results into the array to pass along to DropDown to render
  }

  toggleClick(taskIndex) {
      console.log(taskIndex);
      const newToDoList = [...this.state.todoList];
      newToDoList[taskIndex].completed = !newToDoList[taskIndex].completed;
      this.setState({
          todoList: newToDoList,
          output: []
      });
  }

  renderDrop() {
    if ( this.state.selected.value == 'SHOW_L1') {
      {this.state.todoList.map((item,index)=>{
            this.state.output.push( <ActionableListItem task={item.task} completed={item.completed} handleClick={this.toggleClick} key={index} taskIndex={index}/> );
            return this.state.output;
      })}
    }
    // } else if ( this.state.selected.value == 'SHOW_L2') {
    //   {this.state.todoList.map((item,index)=>{
    //         this.state.output.push( <ActionableListItem task={item.task} completed={item.completed} handleClick={this.toggleClick} key={index} taskIndex={index}/> );
    //         return this.state.output;
    //   })}
    // } else if ( this.state.selected.value == 'SHOW_L3') {
    //   {this.state.todoList.map((item,index)=>{
    //         this.state.output.push( <ActionableListItem task={item.task} completed={item.completed} handleClick={this.toggleClick} key={index} taskIndex={index}/> );
    //         return this.state.output;
    //   })}
    // }
  }

  render() {

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
        {this.state.output}
        </div>
      </div>
    );
  }
}

// Exporting our Panel component
export default SavedPanel;
