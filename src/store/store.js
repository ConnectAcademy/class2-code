import { combineReducers, createStore } from "redux";

import { policies, amountOfMoney } from "./reducers";

const reducers = combineReducers({
  policies,
  amountOfMoney,
});

export const store = createStore(reducers);
