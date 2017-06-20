import React from 'react';

const ListItem = (props)=>{

    let statusClass='';
    let buttonMessage='';
    let taskIndex=props.taskIndex;
    if(props.completed===true){
        statusClass='taskItemComplete';
        buttonMessage="Mark As Incomplete";
    }else{
        statusClass='taskItemIncomplete'
        buttonMessage="Mark As Complete";
    };

    return (
        <div className={`taskItem flex-container-row new-list-item ${statusClass}`}>
            <h5>{props.task}</h5>
        </div>
    )
};

export default ListItem;