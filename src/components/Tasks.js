import Task from "./Task";
import React, { useEffect } from "react";

export default function Tasks({ tasks, onDelete, setTasks }) {
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <ul className="w-full">
      {tasks.map((task, index) => (
        <li key={index}>
          <Task
            task={task}
            onDelete={onDelete}
            setTasks={setTasks}
            tasks={tasks}
          />
        </li>
      ))}
    </ul>
  );
}
