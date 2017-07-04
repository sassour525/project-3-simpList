import React, { Component } from 'react';
import ListItem from './ListItem.js';
import InputBar from './InputBar.js'

import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";



//component used for creating a new list. Uses InputBar and ListItem
class CreateList extends Component{

    constructor(props){
        super(props);
        this.state = {
            todoList:[],
            listName: '',
            addNewTask:(taskText)=>{
               console.log(`${taskText} needs to be added to our list still...`);
               if (taskText == ''){ return; } 
               let newItem = {task: taskText, completed: false};
               let currentList = [...this.state.todoList];
               currentList.push(newItem);
              //  console.log("Current List= " + currentList);
               this.setState({
                    todoList: currentList
               });
            }
        };
        // this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this); 
    };
  
    onRequestDelete(index) {
      // this.todoList = this.state.todoList;
      // const chipToDelete = this.todoList.map((chip) => chip.key).indexOf(key);
      // this.todoList.splice(chipToDelete,1);
      // this.setState({todoList: this.todoList});
      // alert('Deleted');
      console.log(ListItem);
    };

    //handle text input in list name text box
    handleChange(key) {
      return function(e){
        let state = {};
        state[key] = e.target.value;
        this.setState(state);
        console.log(this.state.listName);
      }.bind(this);
    };

    //handle form submit to grab state values
    handleSubmit(event) {
      event.preventDefault();
      //list name to save
      console.log(this.state.listName);
      //array of objects with list items input
      console.log(this.state.todoList);

      //db call to save list name 
    };

    render(){
      const buttonStyle ={
          margin: 20,
        };
      const textFieldStyle={
			  margin: 20,
		    };

        return(
          <div className="panel panel-default">
            <div className="panel-heading">
              <h5>Create a new list</h5>
            </div>
            <div className="panel-body">
              <InputBar addTask={this.state.addNewTask} />
              <div>
                {this.state.todoList.map((item,index)=>{
                  return <ListItem task={item.task} key={index} taskIndex={index} onRequestDelete={this.onRequestDelete} />
                })}
              </div>
              <form id="list-name-form" onSubmit={this.handleSubmit}>
                <TextField id="save-list-name-txt" type="text" value={this.state.listName} onChange={this.handleChange('listName')} hintText="List Name" floatingLabelText="Enter a List Name" style={textFieldStyle} underlineStyle={{display:'none'}} />
                <RaisedButton id="save-list-btn" primary={true} label="Save List" />
              </form>
            </div>
          </div>
        )
    }
};

export default CreateList;
