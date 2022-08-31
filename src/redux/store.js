import { createStore } from "redux";
import displayReducser from "./reducers/displayReducser";

const store = createStore(displayReducser);

export default store;
