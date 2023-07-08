import React, { useContext } from "react";
import { useState } from "react";
import TaskAddArea from "./TaskAddArea";
import TaskContext from "../context/TaskContext";

function TaskItem({ tasks }) {
  const { deleteTaskItem, updateTaskItem } = useContext(TaskContext);

  const [update, setUpdate] = useState(false);

  const handleDelete = () => {
    deleteTaskItem(tasks.id);
  };
  const updateTask = () => {
    setUpdate(true);
  };
  const handleSubmit = (id, updatedTitle, updatedTask) => {
    setUpdate(false);
    updateTaskItem(id, updatedTitle, updatedTask);
  };

  return (
    <div>
      {update ? (
        <TaskAddArea
          tasks={tasks}
          taskFormUpdate={true}
          onUpdate={handleSubmit}
        />
      ) : (
        <div className="taskItems">
          <h3>Your Task</h3>
          <p>{tasks.title}</p>
          <h3>To - do</h3>
          <p>{tasks.taskDesc}</p>
          <div className="buttonDiv">
            <button onClick={handleDelete} className="deleteButton">
              Delete
            </button>
            <button onClick={updateTask} className="changeButton">
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
