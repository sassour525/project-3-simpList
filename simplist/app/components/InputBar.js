import React from 'react';

const InputBar = (props)=>{

let newTaskValue='';
let grabValue=(e)=>{
    newTaskValue = e.target.value;
};

    return (
        <div className="inputBar flex-container-row">
            <input id="new-list-item-txt-box" type="text" placeholder="Enter a new list item" onKeyUp={(e)=>{grabValue(e)}}></input>
            <button id="add-list-item-btn" onClick={()=>{props.addTask(newTaskValue)}}>+</button>
        </div>
    )
};

export default InputBar;