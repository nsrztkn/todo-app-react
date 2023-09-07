import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
