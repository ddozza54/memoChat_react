import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

export default function ToDos() {
  const [todos, setTodos] = useState([
    {
      id: 456,
      text: "밥먹기",
      status: "active",
    },
  ]);
  const handleAdd = (todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };
  return (
    <div className="toDosBox">
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      <AddTodo onAdd={handleAdd} />
    </div>
  );
}
