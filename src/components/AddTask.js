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
    <form onSubmit={onSubmit}>
      <div>
        <label> Task </label>
        <input
          type="title"
          placeholder="Create a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-black"
        />
      </div>
      <div>
        <label> Day and Time </label>
        <input
          className="border-2 border-black"
          type="date"
          value={day}
          placeholder="day and time"
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div>
        <label> Set Reminder </label>
        <input
          className="border-2 border-black"
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        value="Save task"
        className="rounded-lg p-4 text-text bg-list"
      />
    </form>
  );
}
