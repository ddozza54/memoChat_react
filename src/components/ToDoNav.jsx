import React from "react";

export default function ToDoNav({ icon }) {
  return (
    <nav>
      <span className="modeIcon">{icon}</span>
      <div className="buttons">
        <button>All</button>
        <button>Active</button>
        <button>Complete</button>
      </div>
    </nav>
  );
}
