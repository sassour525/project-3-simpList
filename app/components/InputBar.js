import React from 'react';
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";

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
            <FloatingActionButton id="add-list-item-btn" onClick={()=>{props.addTask(newTaskValue)}} style={ButtonStyle} mini={true}>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    )
};

//export InputBar component
export default InputBar;