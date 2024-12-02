const User = require('../models/User');

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) res.status(500).send({ error: 'Failed to fetch users' });
        else res.status(200).send(results);
    });
};

exports.createUser = (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, result) => {
        if (err) res.status(500).send({ error: 'Failed to create user' });
        else res.status(201).send({ message: 'User created', id: result.insertId });
    });
};
