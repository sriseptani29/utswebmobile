// server.js atau app.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());


// API endpoint to get comments
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// API endpoint to post a new comment
app.post('/api/comments', (req, res) => {
  const { name, comment, rating } = req.body;
  const newComment = { id: comments.length + 1, name, comment, rating };
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
