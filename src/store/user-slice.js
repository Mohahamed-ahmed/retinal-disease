import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  isAuthenticated: false,
  userData: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserData(state, action) {
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.error = null;
    },
    clearUser(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload.error;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
