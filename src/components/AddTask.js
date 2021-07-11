import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please add a task");
      return;
    }

    onAdd({ title, day, reminder });

    setTitle("");
    setDay("");
    setReminder(false);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="w-full text-base md:text-xl space-y-4 max-w-4xl"
    >
      <div className="flex flex-col">
        <label className=""> Task </label>
        <input
          type="title"
          placeholder="Create a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-black p-2"
        />
      </div>
      <div className="flex space-x-10 justify-between">
        <div className="flex flex-col">
          <label className=""> Day and Time </label>
          <input
            className="text-gray-600 border-2 tex-base border-black p-2"
            type="date"
            value={day}
            placeholder="day and time"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Save"
          className="rounded-lg px-4 text-gray-300 bg-list"
        />
      </div>
    </form>
  );
}
