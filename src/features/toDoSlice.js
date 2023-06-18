import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../hooks/useLocalStorage";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { getStorage, saveStorage } = useLocalStorage();
const initialState = {
  toDoList: getStorage("todo") || [],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setToDo: (state, action) => {
      state.toDoList = [...action.payload];
      saveStorage([...state.toDoList], "todo");
    },

    addTodo: (state, action) => {
      state.toDoList = [...state.toDoList, action.payload];

      saveStorage([...state.toDoList], "todo");
    },

    deleteTodo: (state, action) => {
      state.toDoList = state.toDoList.filter(
        (todo) => todo.id !== action.payload
      );
      console.log(state.toDoList);
      saveStorage([...state.toDoList], "todo");
    },

    confirmTodo: (state, action) => {
      state.toDoList = state.toDoList.map((itemTodo) =>
        itemTodo.id === action.payload
          ? { ...itemTodo, isDone: !itemTodo.isDone }
          : itemTodo
      );

      saveStorage([...state.toDoList], "todo");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, setToDo, confirmTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
