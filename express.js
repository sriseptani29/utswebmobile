const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let comments = []; // Simulasi penyimpanan data

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const { name, comment, rating } = req.body;
    const newComment = {
        id: comments.length + 1,
        name,
        comment,
        rating,
    };
    comments.push(newComment);
    res.status(201).json(newComment); // Mengembalikan komentar yang baru ditambahkan
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
