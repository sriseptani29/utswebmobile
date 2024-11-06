const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'username',      // Ganti dengan username database Anda
  password: 'password',   // Ganti dengan password database Anda
  database: 'contact_form'    // Ganti dengan nama database Anda
});

// Cek koneksi
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Rute untuk root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Comments API');
});

// Endpoint untuk mendapatkan semua komentar
app.get('/comments', (req, res) => {
  const query = 'SELECT * FROM comments ORDER BY id DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching comments:', err);
      return res.status(500).json(err);
    }
    res.json(results);
  });
});

// Endpoint untuk menyimpan komentar
app.post('/comments', (req, res) => {
  const { name, comment, rating } = req.body;

  // Validasi data
  if (!name || !comment || !rating) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO comments (name, comment, rating) VALUES (?, ?, ?)';
  
  db.query(query, [name, comment, rating], (err, results) => {
    if (err) {
      console.error('Error inserting comment:', err);
      return res.status(500).json(err);
    }
    res.status(201).json({ id: results.insertId, name, comment, rating });
  });
});

// Menangani rute yang tidak dikenal
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
