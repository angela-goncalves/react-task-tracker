import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [showTask, setShowTask] = useState(true);
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  //update tasks
  const toggleReminder = () => {
    console.log("hi");
  };

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
    <div className="flex flex-col w-full justify-center max-w-lg mx-auto">
      <Header title="Tasks Tracker" showTask={showTask} onAdd={setShowTask} />
      {showTask && <AddTask onAdd={addTask} />}
      {tasks && tasks.length > 0 ? (
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}

export default App;
