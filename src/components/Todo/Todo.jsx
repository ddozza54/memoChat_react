import React from "react";
import { HiTrash } from "react-icons/hi";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, id } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  return (
    <li key={id}>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "compeleted"}
        onChange={handleChange}
      />
      <lable htmlFor="checkbox">{text}</lable>
      <button onClick={onDelete}>
        <HiTrash />
      </button>
    </li>
  );
}
