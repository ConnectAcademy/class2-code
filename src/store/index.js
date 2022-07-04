import { createStore, combineReducers } from "redux";
import userReducer from "./reducer";

const reducers = combineReducers({
  user: userReducer,
});

export const store = createStore(reducers);
