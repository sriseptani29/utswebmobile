const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

// Endpoint untuk mendapatkan data komentar
app.get('/api/comments', async (req, res) => {
  try {
    const comments = await prisma.comment.findMany();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
