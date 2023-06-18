import { Typography } from "antd";
import ToDoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";

const { Title } = Typography;
function App() {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          padding: "10px",
          color: "#555",
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        <Title
          level={2}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          Todo List
        </Title>
        <ToDoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
