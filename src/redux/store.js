import displayReducer from "./reducers/displayReducer";
import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./displaySlice";

const store = configureStore({
  reducer: {
    displayReducer: displayReducer,
    displaySlice: displaySlice,
  },
});
export default store;
