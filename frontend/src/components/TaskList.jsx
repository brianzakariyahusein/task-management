import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;