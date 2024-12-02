const db = require('../config/db');

const Donation = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM donations ORDER BY donation_date DESC';
        db.query(sql, callback);
    },
    create: (donation, callback) => {
        const sql = 'INSERT INTO donations SET ?';
        db.query(sql, donation, callback);
    },
};

module.exports = Donation;
