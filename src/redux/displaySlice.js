import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "displaySlice",
  initialState: {
    displayAddTask: "hidden",
    displayUpdateTask: "hidden",
    displayUpdateName: "hidden",
    displayUpdatePassword: "hidden",
  },
  reducers: {
    // Add Task
    blockAddTaskAction: (state) => {
      state.displayAddTask = "block";
    },
    hiddenAddTaskAction: (state) => {
      state.displayAddTask = "hidden";
    },

    // Update Task
    blockUpdateTaskAction: (state) => {
      state.displayUpdateTask = "block";
    },
    hiddenUpdateTaskAction: (state) => {
      state.displayUpdateTask = "hidden";
    },

    // Change Name
    blockUpdateNameAction: (state) => {
      state.displayUpdateName = "block";
    },
    hiddenUpdateNameAction: (state) => {
      state.displayUpdateName = "hidden";
    },

    // Change password
    blockUpdatePasswordAction: (state) => {
      state.displayUpdatePassword = "block";
    },
    hiddenUpdatePasswordAction: (state) => {
      state.displayUpdatePassword = "hidden";
    },
  },
});

export const {
  blockAddTaskAction,
  hiddenAddTaskAction,

  blockUpdateTaskAction,
  hiddenUpdateTaskAction,

  blockUpdateNameAction,
  hiddenUpdateNameAction,

  blockUpdatePasswordAction,
  hiddenUpdatePasswordAction,
} = displaySlice.actions;

export default displaySlice.reducer;
