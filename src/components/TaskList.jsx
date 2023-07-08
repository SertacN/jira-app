import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="taskListContainer">
      {tasks.map((item, i) => {
        return <TaskItem key={i} tasks={item} />;
      })}
    </div>
  );
}

export default TaskList;
