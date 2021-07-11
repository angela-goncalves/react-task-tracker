import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

//intentar pisar el objeto

export default function Task({ task, onDelete }) {
  const [edit, setEdit] = useState(false);
  console.log(task);
  const [inputValue, setInputValue] = useState(task.title);
  const handleOnChange = (title, index) => (e) => {
    let newTasks = task.map((item, i) => {
      if (index === i) {
        return { ...item, [title]: e.target.value };
      } else {
        return item;
      }
    });
    setInputValue(newTasks);
  };
  return (
    <div
      className={`my-4 py-2 w-full ${
        !edit ? "bg-list text-gray-300" : " bg-white text-gray-400"
      } `}
      onClick={() => setEdit(true)}
      onBlur={() => setEdit(false)}
    >
      <h3
        className={`flex flex-row justify-between text-xl items-center ${
          edit ? "text-list" : "text-gray-300"
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
          <p className="p-2">{inputValue}</p>
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
