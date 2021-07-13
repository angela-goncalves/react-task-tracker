import Task from "./Task";

export default function Tasks({ tasks, onDelete, setTasks, onEdit }) {
  return (
    <ul className="w-full">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onDelete={onDelete}
            setTasks={setTasks}
            tasks={tasks}
            onEdit={onEdit}
          />
        </li>
      ))}
    </ul>
  );
}
