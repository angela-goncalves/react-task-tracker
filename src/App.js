import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [showTask, setShowTask] = useState(true);
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  console.log(tasks);
  return (
    <div className="flex flex-col w-full mx-auto items-center z-0 space-y-10">
      <Header title="Tasks Tracker" showTask={showTask} onAdd={setShowTask} />
      {showTask && <AddTask onAdd={addTask} />}
      <div className="w-full h-full flex flex-col justify-center z-10">
        {tasks && tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} />
        ) : (
          <p>No tasks to show</p>
        )}
      </div>
    </div>
  );
}

export default App;
