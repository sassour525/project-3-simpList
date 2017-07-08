import React from 'react';

//ActionableListItem with complete buttons for saved or shared lists
const ActionableListItem = (props) => {
  let statusClass = '';
  let buttonMessage = '';
  let taskIndex = props.taskIndex;

  if (props.completed === true) {
    statusClass = 'taskItemComplete';
    buttonMessage = "Set as Incomplete";
  } else {
    statusClass = 'taskItemIncomplete'
    buttonMessage = "Complete Item";
  };

  return (
    <div className={`taskItem flex-container-row new-list-item ${statusClass}`}>
      <h5>{props.task}</h5>
      <button onClick={() => { props.handleClick(taskIndex) }}>{`${buttonMessage}`}</button>
    </div>
  )
};

export default ActionableListItem;