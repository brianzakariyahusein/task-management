import { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = { title, status };
    await createTask(newTask);
    setTitle(""); // Reset input setelah submit
    onTaskAdded(); // Refresh daftar tugas
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama tugas..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TaskForm;
