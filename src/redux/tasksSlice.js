import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addTask = createAsyncThunk("task/add", async (user) => {
  // const res = await axios.post("http://localhost:5000/api/users", user);
  // return res.data;
});

export const displaySlice = createSlice({
  name: "tasksSlice",
  initialState: {
    title: "",
    description: "",
    date: new Date(),
    loading: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    // [addUser.pending]: (state) => {
    //   state.loading = true;
    // }, //loading
    // [addUser.fulfilled]: (state, action) => {
    //   console.log(action);
    //   state.userData = action.payload;
    //   state.loading = null;
    // }, //Success
    // [addUser.rejected]: (state) => {
    //   state.loading = false;
    //   state.error = true;
    // }, //error
  },
});

export const {} = displaySlice.actions;

export default displaySlice.reducer;
