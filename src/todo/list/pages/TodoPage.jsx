import ListContainer from "../containers/ListContainer";
import React, { useState } from "react";
import { useFetch } from "../../../utils/useFetch";
const URL = "https://jsonplaceholder.typicode.com/todos?_limit=";

export default function TodoPage() {
  const [limit, setlimit] = useState(5);
  const [todos, updateTodo] = useFetch(URL, limit);

  const incrementLimit = () => {
    setlimit(limit + 1);
  };

  const decrementLimit = () => {
    if (limit >= 1) setlimit(limit - 1);
  };

  
  return (
    <>
      {todos && (
        <>
          <ListContainer data={todos} onItemClick={updateTodo} />
          <button
            onClick={decrementLimit}
            type="button"
            class="btn btn-primary"
          >
            -
          </button>
          <button
            onClick={incrementLimit}
            type="button"
            class="btn btn-success"
          >
            +
          </button>
        </>
      )}
    </>
  );
}
