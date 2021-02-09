import React from "react";
import TodoItem from "../components/TodoItem";

export default function ListContainer({ data, onItemClick }) {
  return (
    <>
      <ul class="list-group">
        {data.map((item, index) => (
          <TodoItem
            key={index}
            onClick={() => onItemClick(item, index)}
            todo={item}
          />
        ))}
      </ul>
    </>
  );
}
