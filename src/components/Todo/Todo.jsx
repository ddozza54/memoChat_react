import React from "react";
import { HiTrash } from "react-icons/hi";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
        //체크가 되면 handleChange 함수를 호출해서 checked 값을 바꾼다
      />
      <label htmlFor="checkbox">{text}</label>
      <span>
        <button onClick={handleDelete}>
          <HiTrash />
        </button>
      </span>
    </li>
  );
}
