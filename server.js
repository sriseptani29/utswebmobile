"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var mysql = require("mysql2");
var app = (0, express_1.default)();
var PORT = 5000;
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password', // Ganti dengan password MySQL Anda
    database: 'comment_db'
});
db.connect(function (err) {
    if (err)
        throw err;
    console.log('Connected to the MySQL database');
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get('/comments', function (req, res) {
    db.query('SELECT * FROM comments', function (err, results) {
        if (err)
            return res.status(500).json(err);
        res.json(results);
    });
});
app.post('/comments', function (req, res) {
    var _a = req.body, name = _a.name, comment = _a.comment, rating = _a.rating;
    var query = 'INSERT INTO comments (name, comment, rating) VALUES (?, ?, ?)';
    db.query(query, [name, comment, rating], function (err, result) {
        if (err)
            return res.status(500).json(err);
        res.json({ message: 'Comment added successfully', id: result.insertId });
    });
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
