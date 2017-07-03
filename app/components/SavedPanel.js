import React, { Component } from "react";

// Importing our dropdown component
import Dropdown from "./Dropdown";
import ActionableListItem from './ActionableListItem.js';
import helpers from "../utils/helpers.js";

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
      savedTodoList: [{task: "Saved-task1", completed: false}, {task: "Saved-task2", completed: false}],
      output: [],
      sharedID: ''
    };
    // Binding functions to our component 
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);   
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
    // let dropdownOptions = [];
    //push the query results into the array to pass along to DropDown to render
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
    return function(e){
      let state = {};
      state[key] = e.target.value;
      this.setState(state);
      console.log(this.state.listName);
    }.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //sharedID to save
    console.log(this.state.sharedID);

    //db call 
  };

  renderDrop() {
    if ( this.state.selected.value == 'SHOW_L1') {
      {this.state.savedTodoList.map((item,index)=>{
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
        <form id="share-form" onSubmit={this.handleSubmit}>
          <input id="shareID-txt" type="text" value={this.state.listName} onChange={this.handleChange('sharedID')} placeholder="User ID"/>
          <button id="share-list-btn">Share List</button>
        </form>
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

// Exporting our SavedPanel component
export default SavedPanel;
