import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/toDoSlice";

const store = configureStore({
  reducer: {
    todo: toDoReducer,
  },
});

export default store;
