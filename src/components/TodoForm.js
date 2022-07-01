import React, { useState } from "react";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Add a todo"
        value={input}
        className="todo-input"
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
