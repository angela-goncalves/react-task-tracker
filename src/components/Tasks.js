import Task from "./Task";

export default function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <ul className="">
      {tasks.map((task, index) => (
        <li key={index}>
          <Task tasks={task} onDelete={onDelete} onToggle={onToggle} />
        </li>
      ))}
    </ul>
  );
}
