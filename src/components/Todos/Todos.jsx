import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

export default function ToDos() {
  const [todo, setTodo] = useState({
    id: 456,
    text: "밥먹기",
    status: "active",
  });
  const handleAdd = (todo) => {
    console.log(todo);
    setTodo({ todo });
  };
  return (
    <div className="toDosBox">
      <ul className="toDos">
        <li key={todo.id}>
          <input className="checkBox" type="checkbox" />
          <span className="toDoText">{todo.text}</span>
        </li>
      </ul>

      <AddTodo onAdd={handleAdd} />
    </div>
  );
}
