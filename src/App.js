import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "this is a task",
      day: "May at 1th at 2pm",
      reminder: false,
    },
    {
      id: 2,
      title: "this is a second task",
      day: "July at 7th at 2pm",
      reminder: false,
    },
    {
      id: 3,
      title: "this is a third task",
      day: "September 4th at 2pm",
      reminder: false,
    },
  ]);
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  };
  return (
    <div className="flex flex-col w-full p-5">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}

export default App;
