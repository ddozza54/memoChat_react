import React, { useState } from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpate = (updatedTodo) =>
    setTodos(todos.map((i) => (i.id === updatedTodo.id ? updatedTodo : i)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((i) => i.id !== deleted.id));
  return (
    <div className="toDosBox">
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}
