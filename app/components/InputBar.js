import React from 'react';
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


//input used to capture listitem input to add to your list
const InputBar = (props) => {

  let newTaskValue = '';
  let grabValue = (e) => {
    newTaskValue = e.target.value;
  };

const ButtonStyle ={
    marginLeft:30,
    marginRight:30,
};
const TestFieldStyle={
    margin: 30,
};

    return (
        <div className="inputBar flex-container-row">
            <TextField id="new-list-item-txt-box" type="text" hintText="Enter a new list item" onKeyUp={(e)=>{grabValue(e)}} underlineStyle={{display: 'none'}} style={TestFieldStyle} ></TextField>
            <RaisedButton id="add-list-item-btn" onClick={()=>{props.addTask(newTaskValue)}} style={ButtonStyle} primary={true} label="Add Item To List">
            </RaisedButton>
        </div>
    )
};

//export InputBar component
export default InputBar;