import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    newName: (state, action) => {
      state.name = action.payload;
    },
    newPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { newName, newPassword } = userSlice.actions;

export default userSlice.reducer;
