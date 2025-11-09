import React, { useState } from "react";

function TaskInput({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md bg-white shadow-md rounded-lg p-3 mb-4"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-grow p-2 rounded-l-md border border-gray-300 outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
}

export default TaskInput;
