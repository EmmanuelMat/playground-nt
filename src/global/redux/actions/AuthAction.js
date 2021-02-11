/**
 * asynch actions
 */

import { TYPE } from "../reducers/AuthReducer";

const URL = "http://jsonplaceholder.typicode.com/users"

export default () => (dispatch) =>
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: TYPE.FETCH_USERS,
        data,
      });
    })
    .catch(console.error);
