import React, { useState } from 'react';
import api from '../services/api';
import TaskForm from '../components/TaskForm';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Title and description are required!');
      return;
    }
    await api.post('/tasks', { title, description });
    alert('Task created!');
  };

  return (
    <div className="container">
      <h1>Create Task</h1>
      <TaskForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
        buttonText="Create"
      />
    </div>
  );
};

export default CreateTask;