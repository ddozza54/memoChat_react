import React, { useState } from "react";
import TodoNav from "./components/TodoNav";
import Todos from "./components/Todos/Todos";

export default function ToDo() {
  return (
    <div className="toDoBox">
      <TodoNav icon={"☀️"} />
      <Todos />
      {/* <Todos toDoList={todos.length > 0 ? todos : null} /> */}
    </div>
  );
}
