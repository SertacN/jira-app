import React, { useState } from "react";

function TaskAddArea({ createdTask, onUpdate, taskFormUpdate, tasks }) {
  const [title, setTitle] = useState(tasks ? tasks.title : "");
  const [textArea, setTextArea] = useState(tasks ? tasks.taskDesc : "");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleArea = (event) => {
    setTextArea(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(tasks.id, title, textArea);
    } else {
      createdTask(title, textArea);
    }

    setTitle("");
    setTextArea("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="taskFormUpdate">
          <h2>Edit the Task</h2>
          <label htmlFor="title">Title</label>
          <input value={title} onChange={handleTitle} id="title" />
          <label htmlFor="textArea">Edit Task Area</label>
          <textarea
            value={textArea}
            onChange={handleArea}
            id="textArea"
            cols="30"
            rows="4"
          ></textarea>
          <button className="updateButton" onClick={handleClick}>
            Edit
          </button>
        </div>
      ) : (
        <div className="taskForm">
          <h2>Add Task</h2>
          <label htmlFor="title">Title</label>
          <input value={title} onChange={handleTitle} id="title" />
          <label htmlFor="textArea">Task Area</label>
          <textarea
            value={textArea}
            onChange={handleArea}
            id="textArea"
            cols="30"
            rows="4"
          ></textarea>
          <button className="createButton" onClick={handleClick}>
            Add
          </button>
          <h1>Tasks</h1>
        </div>
      )}
    </div>
  );
}

export default TaskAddArea;
