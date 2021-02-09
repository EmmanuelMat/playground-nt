import React from "react";

export default function TodoItem({ todo, onClick }) {
  return (
    <>
      <li
        style={{ textDecorationLine: !todo.completed ? "" : "line-through" }}
        onClick={onClick}
        class="list-group-item"
      >
        {todo.title}
      </li>
    </>
  );
}
