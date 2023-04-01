import React, { useState } from "react";
import ToDoNav from "./components/ToDoNav";
import Todos from "./components/Todos/Todos";

export default function ToDo() {
  return (
    <div className="toDoBox">
      <ToDoNav icon={"☀️"} />
      <Todos />
      {/* <Todos toDoList={todos.length > 0 ? todos : null} /> */}
    </div>
  );
}
