import { createContext, useState } from "react";
import axios from "axios";

const TaskContext = createContext();

function Provider({ children }) {
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

  const sharedValue = {
    userTask,
    deleteTaskItem,
    updateTaskItem,
    fetchData,
    tasks,
  };

  return (
    <TaskContext.Provider value={sharedValue}>{children}</TaskContext.Provider>
  );
}

export default TaskContext;
export { Provider };
