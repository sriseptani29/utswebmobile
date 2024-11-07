const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Konfigurasi koneksi MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',  // Menggunakan password kosong jika tidak ada password
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306 // Menggunakan port default jika tidak ada port di environment variable
});


// Koneksi ke database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Endpoint untuk mendapatkan semua komentar
app.get('/api/comments', (req, res) => {
  db.query('SELECT * FROM comments', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Endpoint untuk menambahkan komentar
app.post('/api/comments', (req, res) => {
  const { name, comment, rating } = req.body;
  const query = 'INSERT INTO comments (name, comment, rating) VALUES (?, ?, ?)';
  db.query(query, [name, comment, rating], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Comment added successfully!' });
  });
});

// Menjalankan server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
