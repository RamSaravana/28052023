import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {},
  reducers: {
    saveCredentials: (state, action) => {
      state["userCredentials"] = {
        ...state.userCredentials,
        ...action.payload,
      };
    },
  },
});

export const { saveCredentials } = authSlice.actions;
export default authSlice.reducer;
