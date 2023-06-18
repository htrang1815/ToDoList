import { arrayMoveImmutable } from "array-move";
import { useDispatch, useSelector } from "react-redux";

import ToDoItem from "./ToDoItem";
import { sortableContainer } from "react-sortable-hoc";
import { useEffect } from "react";
import { setToDo } from "../features/toDoSlice";
// import { setToDo } from "../features/toDoSlice";

const SortableContainer = sortableContainer(({ children }) => {
  return <div style={{ padding: "20px" }}>{children}</div>;
});

const TodoList = () => {
  const todoLists = useSelector((state) => state.todo.toDoList);
  console.log("todoLists", todoLists);
  const dispatch = useDispatch();

  const onSortEnd = ({ oldIndex, newIndex }) => {
    // const ar = arrayMoveImmutable(todoLists, oldIndex, newIndex);
    // console.log(ar);

    dispatch(setToDo(arrayMoveImmutable(todoLists, oldIndex, newIndex)));
  };
  useEffect(() => {}, [todoLists]);

  return (
    <SortableContainer onSortEnd={onSortEnd}>
      {todoLists?.map((item, index) => {
        return (
          <ToDoItem
            key={`item-${index}`}
            itemKey={`item-${index}`}
            index={index}
            value={item}
          />
        );
      })}
    </SortableContainer>
  );
};

export default TodoList;
