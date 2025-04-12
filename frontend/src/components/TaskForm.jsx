import React from 'react';

const TaskForm = ({ title, description, setTitle, setDescription, handleSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default TaskForm;