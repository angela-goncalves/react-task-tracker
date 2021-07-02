import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Task({ tasks, onDelete, onToggle }) {
  const [edit, setEdit] = useState(false);

  return (
    <div
      className={`bg-list text-gray-400 my-4 ${
        tasks.reminder ? "border-l-4 border-green-400" : ""
      }`}
      onDoubleClick={() => onToggle(tasks.id)}
      onClick={() => setEdit(true)}
      onBlur={() => setEdit(false)}
    >
      <h3
        className={`flex flex-row justify-between ${
          edit ? "text-red-300" : ""
        }`}
      >
        {edit ? <input type="text" value={tasks.title} /> : tasks.title}

        <div className="flex flex-row justify-evenly">
          <AiOutlineClose
            className="text-red-500 cursor-pointer"
            onClick={() => onDelete(tasks.id)}
          />

          <input
            className="border-1 rounded-full text-black w-4"
            type="checkbox"
          />
        </div>
      </h3>
      <p>{tasks.day}</p>
    </div>
  );
}
