import { Checkbox, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { sortableElement } from "react-sortable-hoc";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { confirmTodo, deleteTodo } from "../features/toDoSlice";

const SortableItem = sortableElement(
  ({ value, handleDelete, handleConfirm }) => {
    console.log("value", value);
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
          padding: "10px 0",
          borderWidth: "0 0 1px 0",
          borderStyle: "solid",
          borderColor: "#d4d4d4",
        }}
      >
        <Checkbox onClick={handleConfirm} checked={value?.isDone}>
          {value?.todo}
        </Checkbox>
        <Button
          type="primary"
          danger
          icon={<DeleteOutlined />}
          onClick={handleDelete}
        ></Button>
      </div>
    );
  }
);

const ToDoItem = ({ itemKey, index, value }) => {
  console.log(value);
  const dispatch = useDispatch();
  const handleDelete = (idTodo) => {
    dispatch(deleteTodo(idTodo));
  };
  const handleConfirm = (idTodo) => {
    dispatch(confirmTodo(idTodo));
  };
  return (
    <SortableItem
      key={itemKey}
      index={index}
      value={value}
      handleDelete={() => {
        handleDelete(value.id);
      }}
      handleConfirm={() => {
        handleConfirm(value.id);
      }}
    />
  );
};

ToDoItem.propTypes = {
  itemKey: PropTypes.string,
  index: PropTypes.number,
  value: PropTypes.string,
};

ToDoItem.defaultProps = {
  itemKey: undefined,
  index: undefined,
  value: undefined,
};

export default ToDoItem;
