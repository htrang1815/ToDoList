import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/toDoSlice";
import { useEffect } from "react";

const ToDoForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values);
    if (values?.todo?.trim() !== "") {
      dispatch(addTodo({ ...values, id: Date.now(), isDone: false }));
    }
    form.resetFields();
  };

  useEffect(() => {}, []);
  return (
    <Form
      form={form}
      style={{
        padding: "0 100px",
        display: "flex",
        gap: "20px",
      }}
      onFinish={handleSubmit}
    >
      <Form.Item style={{ width: "100%" }} name="todo" key="todo">
        <Input
          bordered={false}
          style={{
            borderBottom: "1px solid #555",
            borderRadius: "0px",
          }}
          type="text"
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add Todo
      </Button>
    </Form>
  );
};

export default ToDoForm;
