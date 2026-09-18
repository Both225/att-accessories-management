import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 1;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const selectCounter = (state) => state.counter.value;
export default counterSlice.reducer;
