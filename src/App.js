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
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Header title="Tasks Tracker" showTask={showTask} onAdd={setShowTask} />
      <div className="px-4 py-16 md:px-20 w-full max-w-4xl 2xl:max-w-5xl h-full flex flex-col items-center space-y-10">
        {showTask && <AddTask onAdd={addTask} />}
        {tasks && tasks.length > 0 ? (
          <Tasks tasks={tasks} setTasks={setTasks} onDelete={deleteTask} />
        ) : (
          <p>No tasks to show</p>
        )}
      </div>
    </div>
  );
}

export default App;
