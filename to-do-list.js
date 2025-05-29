const express = require('express');
const fs = require('fs').promises;
const app = express();

app.use(express.json());

let todos = [];

// Gets all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Gets a specific todo
app.get('/todos/:id', (req, res) => {
    res.json(todos.filter(todo => todo.id === Number(req.params.id)))
});

// Creates a todo
app.post('/todos', async (req, res) => {
  const todo = { id: Date.now(), task: req.body.task };
  todos.push(todo);
  await fs.writeFile('todos.json', JSON.stringify(todos));
  res.status(201).json(todo);
});

// Deletes a todo
app.delete('/todos/:id', async (req, res) => {
  todos = todos.filter(todo => todo.id !== Number(req.params.id));
  await fs.writeFile('todos.json', JSON.stringify(todos));
  res.status(204).end();
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));