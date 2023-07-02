import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ task, onDelete, onUpdate }) {
  return (
    <div className="taskListContainer">
      {task.map((item, i) => {
        return (
          <TaskItem
            key={i}
            tasks={item}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
