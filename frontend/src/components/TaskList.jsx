import React from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await api.delete(`/tasks/${id}`);
      fetchTasks(); // Refresh the task list
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <Link to={`/edit/${task.id}`} style={{ marginRight: '10px' }}>Edit</Link>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;