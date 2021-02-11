import { createStore, applyMiddleware, combineReducers } from "redux";
import AuthReducer from "../reducers/AuthReducer";
import UsersReducer from "../reducers/UsersReducer";
import ReduxThunk from 'redux-thunk'

const rootrededucer = combineReducers({AuthReducer, UsersReducer})

export const store = createStore(rootrededucer, applyMiddleware(ReduxThunk));
