import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showTask, setShowTask] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let taskEditing = JSON.parse(localStorage.getItem("tasks"));
    setTasks(taskEditing ? taskEditing : []);
  }, []);

  const onEdit = (value, index) => {
    setTasks(() =>
      tasks.map((item) =>
        item.id !== index ? item : { ...item, title: value }
      )
    );
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTask = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...item };
    try {
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    } catch (error) {
      //manejas el error y no ejecutas el setTasks
      alert("No se pudo grabar, intenta de nuevo");
      return;
    }
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Header title="Tasks Tracker" showTask={showTask} onAdd={setShowTask} />
      <div className="px-4 py-16 md:px-20 w-full max-w-4xl 2xl:max-w-5xl h-full flex flex-col items-center space-y-10">
        {showTask && <AddTask onAdd={addTask} />}
        {tasks && tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onEdit={onEdit} />
        ) : (
          <p>No tasks to show</p>
        )}
      </div>
    </div>
  );
}

export default App;
