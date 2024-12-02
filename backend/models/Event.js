const db = require('../config/db');

const Event = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM events ORDER BY event_date ASC';
        db.query(sql, callback);
    },
    create: (event, callback) => {
        const sql = 'INSERT INTO events SET ?';
        db.query(sql, event, callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM events WHERE event_id = ?';
        db.query(sql, [id], callback);
    },
};

module.exports = Event;
