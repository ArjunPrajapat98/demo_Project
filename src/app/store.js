import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/counter/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});
