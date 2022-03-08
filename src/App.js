import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(initialState);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
            editTask={editTask}
            setEditTask={setEditTask}
          />
        </div>
        <div>
          <TodoList
            tasks={tasks}
            setTasks={setTasks}
            setEditTask={setEditTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
