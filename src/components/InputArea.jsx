import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      AddTodo();
    }
  };

  const AddTodo = () => {
    props.onAdd(inputText);
    setInputText("");
  };

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        onKeyDown={handleKeyDown}
      />
      <button onClick={AddTodo} type="submit" onSubmit={AddTodo}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
