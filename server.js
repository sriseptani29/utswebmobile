const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'] // Log Prisma untuk debugging
});

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Untuk menangani JSON body

// Route untuk root ("/")
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Route untuk mendapatkan komentar
app.get('/api/comments', async (req, res) => {
  try {
    // Mendapatkan semua komentar dari database
    const comments = await prisma.comment.findMany();
    console.log('Fetched comments:', comments); // Menampilkan data komentar di console
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error); // Log error ke console
    res.status(500).json({
      error: 'Failed to fetch comments',
      details: error.message // Memberikan detail error yang lebih lengkap
    });
  }
});

// Route untuk menambah komentar
app.post('/api/comments', async (req, res) => {
  const { name, comment, rating } = req.body;

  // Validasi input
  if (!name || !comment || !rating) {
    return res.status(400).json({ error: 'Name, comment, and rating are required' });
  }

  try {
    // Menambah komentar baru ke database
    const newComment = await prisma.comment.create({
      data: {
        name,
        comment,
        rating,
      },
    });
    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error submitting comment:', error); // Log error ke console
    res.status(500).json({
      error: 'Failed to submit comment',
      details: error.message // Memberikan detail error yang lebih lengkap
    });
  }
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});