// api/comments.js
const mysql = require('mysql2');

// Koneksi ke database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',  // Menggunakan password kosong jika tidak ada password
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306 // Menggunakan port default jika tidak ada port di environment variable
});

// Endpoint untuk menangani request GET dan POST
module.exports = async (req, res) => {
  if (req.method === 'GET') {
    // Mengambil data komentar dari database
    db.query('SELECT * FROM comments', (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    });
  } else if (req.method === 'POST') {
    // Menambahkan komentar baru ke database
    const { name, comment, rating } = req.body;
    const query = 'INSERT INTO comments (name, comment, rating) VALUES (?, ?, ?)';
    db.query(query, [name, comment, rating], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Comment added successfully!' });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
 