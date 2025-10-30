import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { todoAPI } from '../services/api';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium'
  });

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await todoAPI.getTodos();
      setTodos(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch todos. Please try again.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      setError('Please enter a todo title');
      return;
    }

    try {
      const newTodo = await todoAPI.createTodo(formData);
      setTodos(prev => [newTodo, ...prev]);
      setFormData({ title: '', description: '', priority: 'medium' });
      setError('');
    } catch (err) {
      setError('Failed to create todo. Please try again.');
      console.error('Error creating todo:', err);
    }
  };

  const handleToggle = async (id) => {
    try {
      const updatedTodo = await todoAPI.toggleTodo(id);
      setTodos(prev => prev.map(todo => 
        todo._id === id ? updatedTodo : todo
      ));
    } catch (err) {
      setError('Failed to update todo. Please try again.');
      console.error('Error toggling todo:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this todo?')) {
      return;
    }

    try {
      await todoAPI.deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo. Please try again.');
      console.error('Error deleting todo:', err);
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="container">
      {/* Todo Form */}
      <div className="todo-form">
        <h2>
          <i className="fas fa-plus-circle"></i> Add New Todo
        </h2>
        {error && (
          <div className="error-message" style={{ 
            color: '#dc3545', 
            marginBottom: '1rem',
            padding: '0.75rem',
            background: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '5px'
          }}>
            <i className="fas fa-exclamation-triangle"></i> {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="What needs to be done?"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Add more details (optional)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" className="btn">
            <i className="fas fa-plus"></i> Add Todo
          </button>
        </form>
      </div>

      {/* Todo List */}
      <div className="todos-container">
        <div className="todos-header">
          <h2>
            <i className="fas fa-list-check"></i> My Todos
          </h2>
          {totalCount > 0 && (
            <p>{completedCount} of {totalCount} completed</p>
          )}
        </div>
        
        <div className="todos-list">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading your todos...</p>
            </div>
          ) : todos.length === 0 ? (
            <div className="empty-state">
              <i className="fas fa-clipboard-list"></i>
              <h3>No todos yet!</h3>
              <p>Add your first todo above to get started.</p>
            </div>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;