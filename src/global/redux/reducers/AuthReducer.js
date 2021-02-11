const initState = {
  authorized: false,
  userName: ""
};

export const TYPE = {
  AUTH: "AUTH",
  LOG_OUT: "LOG_OUT",
  FETCH_USERS: "FETCH_USERS"
};

export default (state = initState, action) => {
  switch (action.type) {
    case TYPE.AUTH:
      return {
        ...state,
        ["authorized"]: true,
        ["userName"]: action.data.userName,
      };
    case TYPE.LOG_OUT:
      return { ...state, ["authorized"]: false, ["userName"]: "" };
    default:
      return state;
  }
};
