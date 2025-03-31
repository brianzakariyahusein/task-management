import { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // Opsional
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState(""); // Opsional

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Title tetap wajib diisi

    // Pastikan nilai status dan priority selalu dikirim
    const newTask = {
      title,
      description: description.trim() ? description : undefined, // Opsional
      status: status || "pending", // Jika tidak diubah, tetap "pending"
      priority: priority || "low", // Jika tidak diubah, tetap "low"
      dueDate: dueDate ? dueDate : undefined, // Opsional
    };

    await createTask(newTask);
    setTitle("");
    setDescription("");
    setStatus("pending"); // Reset ke nilai default
    setPriority("low"); // Reset ke nilai default
    setDueDate("");
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama tugas..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Deskripsi tugas... (Opsional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      {/* Status */}
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Priority */}
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {/* Due Date */}
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Tambah</button>
    </form>
  );
}

export default TaskForm;
