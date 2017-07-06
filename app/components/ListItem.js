import React from "react";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import {cyan200, cyan900} from "material-ui/styles/colors";
import FontIcon from "material-ui/FontIcon";
import SvgIconFace from "material-ui/svg-icons/action/face";

//regular list iem without "complete" button for creating a list
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

const styles={
    chip:{
        margin: 4,
    },
    wrapper:{
        display: 'flex',
        flexWrap: 'wrap',
    },
};

function handleTouchTap(){
    alert('Touched');
}

// function onRequestDelete(key){
//     console.log("Key= " + key);
//     console.log("task= " + props.task)
//     //   props.todoList = this.todoList;
//       const chipToDelete = key;
//       console.log("CTD= " + chipToDelete);
//     //   props.todoList.splice(chipToDelete,1);
//     //   this.setState({todoList: props.todoList});
//     //   alert('Deleted');
//     };

    return (
        // <div className={`taskItem flex-container-row new-list-item ${statusClass}`}>
        //     <h5>{props.task}</h5>
        // </div>
        <div style={styles.wrapper}>

            <Chip
                value={props.taskIndex}
                key={props.taskIndex}
                className={'${statusClass}'}
                backgroundColor={cyan200}
                onRequestDelete= {props.onRequestDelete}
                onTouchTap={handleTouchTap}
                style={styles.chip}
            >
                <Avatar size={32} color={cyan200} backgroundColor={cyan900}>{props.taskIndex + 1}</Avatar>
                {props.task}
            </Chip>

        </div>
    )
};

export default ListItem;