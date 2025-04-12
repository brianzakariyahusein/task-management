import React from "react";

function TaskItem({task}) {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskItem;