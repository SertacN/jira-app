import { useEffect, useContext } from "react";
import "./App.css";
import TaskAddArea from "./components/TaskAddArea";
import TaskList from "./components/TaskList";
import TaskContext from "./context/TaskContext";

function App() {
  const { fetchData } = useContext(TaskContext);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <TaskAddArea />
      <TaskList />
    </div>
  );
}

export default App;
