import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    ui: uiSlice,
  },
});

export default store;
