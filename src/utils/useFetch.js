import { useEffect, useState } from "react";

export const useFetch = (url, trigger) => {
  // This is only for demostration purposes
  // separating state from here is a much  better implamentation
  // You guys could practice doing it.
  const [state, setstate] = useState([]);

  const setTodoDone = (item, index) => {
      // this could be simplify as well ...tengo sueño
    const tem = state;
    tem.splice(index, 1, item);
    item.completed = !item.completed;
    setstate([...tem]);
  };
  useEffect(() => {
    fetch(url + trigger)
      .then((res) => res.json())
      .then((data) => setstate(data))
      .catch(console.error);
  }, [trigger]);

  return [state, setTodoDone];
};
