const db = require('../config/db');

const Admin = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM admins ORDER BY created_at DESC';
        db.query(sql, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM admins WHERE admin_id = ?';
        db.query(sql, [id], callback);
    },
    create: (admin, callback) => {
        const sql = 'INSERT INTO admins SET ?';
        db.query(sql, admin, callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM admins WHERE admin_id = ?';
        db.query(sql, [id], callback);
    },
};

module.exports = Admin;
