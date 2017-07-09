import React, { Component } from 'react';
import ListItem from './ListItem.js';
import InputBar from './InputBar.js'
import helpers from '../utils/helpers.js'
import Navbard from './Navbar.js';

import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Snackbar from 'material-ui/Snackbar';



//component used for creating a new list. Uses InputBar and ListItem
class CreateList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      todoList: [],
      listItemInput: '',
      newItem: '',
      addNewTask: (taskText) => {
        if (taskText == '') { return; }
        let newItem = { task: taskText, completed: false };
        let currentList = [...this.state.todoList];
        currentList.push(newItem);
        this.setState({
          todoList: currentList,
          listItemInput: '',
          newItem: { task: taskText, completed: false } 
        });
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onRequestDelete = this.onRequestDelete.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  };

  handleTouchTap() {
    this.setState({
      open: true,
    });
    console.log("mobile device touch");
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  onRequestDelete(index) {
    this.todoList = this.state.todoList;
    console.log(this.todoList[0]);
    const chipToDelete = index;
    // const chipToDelete = this.todoList.map((chip, index) => chip.index).indexOf();
    console.log("ChipToDelete " + chipToDelete);
    this.todoList.splice(chipToDelete, 1);
    this.setState({ todoList: this.todoList });
  };

  //handle text input in list name text box
  handleChange(key) {
    return function (e) {
      let state = {};
      state[key] = e.target.value;
      this.setState(state);
      // console.log("55: " + this.state.listName);
    }.bind(this);
  };

  //handle form submit to grab state values
  handleSubmit(event) {
    event.preventDefault();
    //list name to save
    console.log(this.state.listName);
    //array of objects with list items input
    console.log(this.state.todoList);
    let _id = localStorage.getItem("userId");
    var finalList = {
      title: this.state.listName,
      listItems: this.state.todoList,
      owner: _id
    }

    console.log(finalList);

    helpers.postList(finalList).then(function (data) {
      console.log(data);
      this.clearForm();
    }.bind(this));
  }

  clearForm() {
      this.setState({
        listName: "",
        todoList: []
      })
    }

  render() {
    const buttonStyle = {
      margin: 20,
    };
    const textFieldStyle = {
      margin: 20,
    };

    return (
      <div>
        <Navbard />
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h5>Create a new list</h5>
            </div>
            <div className="panel-body">
              <InputBar addTask={this.state.addNewTask} />
              <div>
                {this.state.todoList.map((item, index) => {
                  return <ListItem task={item.task} key={index} value={index} taskIndex={index} onRequestDelete={this.onRequestDelete} handleTouchTap={this.handleTouchTap} />
                })}
              </div>
              <form id="list-name-form" onSubmit={this.handleSubmit}>
                <TextField id="save-list-name-txt" type="text" value={this.state.listName} onChange={this.handleChange('listName')} hintText="List Name" floatingLabelText="Enter a List Name" style={textFieldStyle} underlineStyle={{ display: 'none' }} />
                <RaisedButton id="save-list-btn" type="submit" primary={true} onTouchTap={this.handleTouchTap} label="Save List" />
                <Snackbar
                  open={this.state.open}
                  message="List successfully created."
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CreateList;
