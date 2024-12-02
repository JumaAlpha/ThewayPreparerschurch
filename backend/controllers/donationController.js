const Donation = require('../models/Donation');

exports.getAllDonations = (req, res) => {
    Donation.getAll((err, results) => {
        if (err) res.status(500).send({ error: 'Failed to fetch donations' });
        else res.status(200).send(results);
    });
};

exports.createDonation = (req, res) => {
    const newDonation = req.body;
    Donation.create(newDonation, (err, result) => {
        if (err) res.status(500).send({ error: 'Failed to create donation' });
        else res.status(201).send({ message: 'Donation received', id: result.insertId });
    });
};
