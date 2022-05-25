import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const dataSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    ADD_DATA: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { ADD_DATA } = dataSlice.actions;

export default dataSlice.reducer;
