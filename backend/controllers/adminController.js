const Admin = require('../models/Admin');

exports.getAllAdmins = (req, res) => {
    Admin.getAll((err, results) => {
        if (err) res.status(500).send({ error: 'Failed to fetch admins' });
        else res.status(200).send(results);
    });
};

exports.createAdmin = (req, res) => {
    const newAdmin = req.body;
    Admin.create(newAdmin, (err, result) => {
        if (err) res.status(500).send({ error: 'Failed to create admin' });
        else res.status(201).send({ message: 'Admin created', id: result.insertId });
    });
};
