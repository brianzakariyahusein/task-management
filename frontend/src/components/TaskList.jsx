import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await api.delete(`/tasks/${id}`);
        fetchTasks(); // Refresh the task list
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <Link to={`/edit/${task.id}`} style={{ marginRight: "10px" }}>
            Edit
          </Link>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task List</h1>
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default Home;