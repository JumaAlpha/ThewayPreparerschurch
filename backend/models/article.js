const db = require('../config/db');

const Article = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM articles ORDER BY published_date DESC';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM articles WHERE article_id = ?';
        db.query(sql, [id], callback);
    },
    create: (article, callback) => {
        const sql = 'INSERT INTO articles SET ?';
        db.query(sql, article, callback);
    },
};

module.exports = Article;
