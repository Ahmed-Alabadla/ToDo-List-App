import displayReducer from "./reducers/displayReducer";
import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./displaySlice";
import tasksSlice from "./tasksSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    displayReducer: displayReducer,
    displaySlice: displaySlice,
    tasks: tasksSlice,
    userSlice: userSlice,
  },
});
export default store;
