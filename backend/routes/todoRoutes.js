const express = require('express');
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo
} = require('../controllers/todoController');

// GET /api/todos - Get all todos
router.get('/', getTodos);

// POST /api/todos - Create new todo
router.post('/', createTodo);

// PUT /api/todos/:id - Update todo
router.put('/:id', updateTodo);

// DELETE /api/todos/:id - Delete todo
router.delete('/:id', deleteTodo);

// PATCH /api/todos/:id/toggle - Toggle todo completion
router.patch('/:id/toggle', toggleTodo);

module.exports = router;