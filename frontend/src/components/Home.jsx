import React, { useEffect, useState } from 'react';
import api from '../services/api';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get('/tasks');
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;