import Task from "./Task";

export default function Tasks({ tasks, onDelete, setTasks }) {
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
