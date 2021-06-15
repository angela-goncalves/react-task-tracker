import { FaTimes } from "react-icons/fa";

export default function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <div
      className={`bg-list text-gray-400 my-4 ${
        tasks.reminder ? "border-l-4 border-green-400" : ""
      }`}
      onDoubleClick={() => onToggle(tasks.id)}
    >
      <h3 className="flex flex-row justify-between">
        {tasks.title}
        <FaTimes
          className="text-red-500 cursor-pointer"
          onClick={() => onDelete(tasks.id)}
        />
      </h3>
      <p>{tasks.day}</p>
    </div>
  );
}
