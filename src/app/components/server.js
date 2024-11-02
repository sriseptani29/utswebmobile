// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/cv_comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// Schema Komentar
const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number,
  date: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

// API untuk mendapatkan komentar
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
});

// API untuk menambah komentar
app.post('/comments', async (req, res) => {
  const { name, comment, rating } = req.body;
  const newComment = new Comment({ name, comment, rating });
  await newComment.save();
  res.status(201).send(newComment);
});

// Menjalankan server di port 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
