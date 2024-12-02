const Event = require('../models/Event');

exports.getAllEvents = (req, res) => {
    Event.getAll((err, results) => {
        if (err) res.status(500).send({ error: 'Failed to fetch events' });
        else res.status(200).send(results);
    });
};

exports.createEvent = (req, res) => {
    const newEvent = req.body;
    Event.create(newEvent, (err, result) => {
        if (err) res.status(500).send({ error: 'Failed to create event' });
        else res.status(201).send({ message: 'Event created', id: result.insertId });
    });
};
