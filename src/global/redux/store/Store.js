import { createStore } from "redux";
import AuthReducer from "../reducers/AuthReducer";

export const store = createStore(AuthReducer);
