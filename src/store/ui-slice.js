import { createSlice } from "@reduxjs/toolkit";

const uiInitialSlice = {
  changed: false,
  notification: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialSlice,
  reducers: {
    setUiChanged(state, action) {
      state.changed = action.payload;
    },
    addNotification(state, action) {
      if (state.notification.length >= 5) state.notification = [];
      state.notification.push({
        id: Date.now(),
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      });
    },
    removeNotification(state, action) {
      state.notification = state.notification.filter(
        (notification) => notification.id !== action.payload.id
      );
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
