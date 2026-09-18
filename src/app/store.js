import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/sell-accessory/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
