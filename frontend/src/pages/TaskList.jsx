import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/taskService";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Gagal mengambil tugas", error);
    }
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    fetchTasks(); // Refresh daftar tugas setelah dihapus
  };

  return (
    <div>
      <h2>Daftar Tugas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.status}
            <button onClick={() => handleDelete(task._id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
