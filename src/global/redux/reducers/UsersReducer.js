import { TYPE } from "./AuthReducer";

const initState = {
  users: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case TYPE.FETCH_USERS:
      return { ...state, ["users"]: action.data };
    default:
      return state;
  }
};
