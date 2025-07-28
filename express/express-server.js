// Imports Express and Creates an App.
const express = require('express');
const app = express();

// Middleware to Parse JSON
app.use(express.json()); 

// Handles GET requests to the root URL (/).
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Handles POST requests to the /data URL.
app.post('/data', (req, res) => {
  res.json({ received: req.body });
});

// Starts the server and listens for requests on port 3000.
app.listen(3000, () => console.log('Server running on http://localhost:3000'));

// Error Handling
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong!' });
});