import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql, { ResultSetHeader } from 'mysql2';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // tanpa password
  database: 'comment_db',
});


// Menghubungkan ke database
db.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal: ', err);
    return;
  }
  console.log('Koneksi ke database berhasil');
});

// Contoh endpoint
app.post('/comments', (req, res) => {
  const { name, comment, rating } = req.body;
  const query = 'INSERT INTO comments (name, comment, rating) VALUES (?, ?, ?)';
  
  db.query(query, [name, comment, rating], (err, result: ResultSetHeader) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ id: result.insertId, name, comment, rating });
  });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
