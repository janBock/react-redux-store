import { legacy_createStore } from "redux";
import reducers from "./reducers/index";

const store = legacy_createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //2nd arg is the state, which is currently empty

export default store;
