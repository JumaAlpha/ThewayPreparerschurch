const db = require('../config/db');

const User = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM users ORDER BY created_at DESC';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE user_id = ?';
        db.query(sql, [id], callback);
    },
    create: (user, callback) => {
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, user, callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM users WHERE user_id = ?';
        db.query(sql, [id], callback);
    },
};

module.exports = User;
