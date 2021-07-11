import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

//intentar pisar el objeto

export default function Task({ task, onDelete, setTasks, tasks }) {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(task.title);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    const temp = tasks.map((item) => {
      if (item.id === task.id) {
        return {
          ...item,
          title: e.target.value,
        };
      }
      return item;
    });
    //Find index of specific object using findIndex method.
    // const objIndex = tasks.findIndex((obj) => obj.id === task.id);

    // //Log object to Console.
    // console.log("Before update: ", tasks[objIndex]);

    // //Update object's name property.

    // const temp = tasks[objIndex].title = e.target.value;

    setTasks(temp);
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
