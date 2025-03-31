import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/taskService";
import TaskForm from "../components/TaskForm";

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
    fetchTasks();
  };

  return (
    <div>
      <h2>Daftar Tugas</h2>
      <TaskForm onTaskAdded={fetchTasks} />
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.status}
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {task.dueDate ? task.dueDate : "N/A"}</p>
            <button onClick={() => handleDelete(task._id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
