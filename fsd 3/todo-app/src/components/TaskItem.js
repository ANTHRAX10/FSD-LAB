import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`flex justify-between items-center bg-white shadow p-3 rounded-md ${
        task.completed ? "opacity-70 line-through" : ""
      }`}
    >
      <span
        className="cursor-pointer"
        onClick={() => onToggle(task.id)}
        title="Click to mark complete"
      >
        {task.text}
      </span>
      <button
        className="text-red-500 hover:text-red-700 font-semibold"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
