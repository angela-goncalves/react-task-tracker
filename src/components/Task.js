import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Task({ task, onDelete, setTasks, onEdit }) {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div
      className={`my-4 py-2 w-full ${
        !edit ? "bg-list text-gray-300" : " bg-white text-gray-400"
      } `}
      onClick={() => {
        setEdit(true);
        setInputValue(task.title);
      }}
      onBlur={() => {
        setEdit(false);
        onEdit(inputValue, task.id);
      }}
    >
      <h3
        className={`flex flex-row justify-between text-xl items-center ${
          edit ? "text-list" : "text-gray-200"
        }`}
      >
        {edit ? (
          <input
            className="p-2 w-full bg-white border-none focus:ring-0"
            type="text"
            value={inputValue}
            onChange={handleOnChange}
          />
        ) : (
          <p className="p-2">{task.title}</p>
        )}
        <div className="flex flex-row justify-around">
          <AiOutlineClose
            className="text-red-500 cursor-pointer"
            onClick={() => onDelete(task.id)}
          />
        </div>
      </h3>
      <p className="px-2">{task.day}</p>
    </div>
  );
}
