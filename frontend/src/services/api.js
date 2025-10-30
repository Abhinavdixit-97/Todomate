import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Todo API functions
export const todoAPI = {
  // Get all todos
  getTodos: async () => {
    const response = await api.get('/todos');
    return response.data;
  },

  // Create new todo
  createTodo: async (todoData) => {
    const response = await api.post('/todos', todoData);
    return response.data;
  },

  // Update todo
  updateTodo: async (id, todoData) => {
    const response = await api.put(`/todos/${id}`, todoData);
    return response.data;
  },

  // Delete todo
  deleteTodo: async (id) => {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  },

  // Toggle todo completion
  toggleTodo: async (id) => {
    const response = await api.patch(`/todos/${id}/toggle`);
    return response.data;
  },
};

// Error handling interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;