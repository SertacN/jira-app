import { useState } from "react";
import "./App.css";
import TaskAddArea from "./components/TaskAddArea";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const userTask = (title, taskDesc) => {
    const taskArray = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(taskArray);
  };

  const deleteTaskItem = (id) => {
    const newTaskArray = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(newTaskArray);
  };
  const updateTaskItem = (id, updatedTitle, updatedTask) => {
    const updatedTaskArray = tasks.map((item) => {
      if (item.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTask };
      }
      return item;
    });
    setTasks(updatedTaskArray);
  };
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
