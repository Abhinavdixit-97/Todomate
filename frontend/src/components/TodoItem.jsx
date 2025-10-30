import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPriorityClass = (priority) => {
    return `priority-badge priority-${priority}`;
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-header">
        <div>
          <h3 className="todo-title">{todo.title}</h3>
          <span className={getPriorityClass(todo.priority)}>
            {todo.priority}
          </span>
        </div>
        <div className="todo-actions">
          <button
            className={`btn btn-sm ${todo.completed ? 'btn-secondary' : 'btn-success'}`}
            onClick={() => onToggle(todo._id)}
          >
            <i className={`fas ${todo.completed ? 'fa-undo' : 'fa-check'}`}></i>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(todo._id)}
          >
            <i className="fas fa-trash"></i>
            Delete
          </button>
        </div>
      </div>
      
      {todo.description && (
        <p className="todo-description">{todo.description}</p>
      )}
      
      <div className="todo-meta">
        <span>
          <i className="fas fa-calendar-plus"></i>
          Created: {formatDate(todo.createdAt)}
        </span>
        {todo.updatedAt !== todo.createdAt && (
          <span>
            <i className="fas fa-edit"></i>
            Updated: {formatDate(todo.updatedAt)}
          </span>
        )}
      </div>
    </div>
  );
};

export default TodoItem;