import { useEffect, useState } from "react";
import "./App.css";
import TaskAddArea from "./components/TaskAddArea";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const userTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    const taskArray = [...tasks, response.data];
    setTasks(taskArray);
  };

  const deleteTaskItem = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const newTaskArray = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(newTaskArray);
  };
  const updateTaskItem = async (id, updatedTitle, updatedTask) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTask,
    });
    const updatedTaskArray = tasks.map((item) => {
      if (item.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTask };
      }
      return item;
    });
    setTasks(updatedTaskArray);
  };

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <TaskAddArea createdTask={userTask} />
      <TaskList
        onDelete={deleteTaskItem}
        task={tasks}
        onUpdate={updateTaskItem}
      />
    </div>
  );
}

export default App;
