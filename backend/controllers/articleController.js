const Article = require('../models/article');

exports.getAllArticles = (req, res) => {
    Article.getAll((err, results) => {
        if (err) {
            res.status(500).send({ error: 'Failed to fetch articles' });
        } else {
            res.status(200).send(results);
        }
    });
};

exports.getArticleById = (req, res) => {
    const id = req.params.id;
    Article.getById(id, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Failed to fetch the article' });
        } else {
            res.status(200).send(result);
        }
    });
};

exports.createArticle = (req, res) => {
    const newArticle = req.body;
    Article.create(newArticle, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Failed to create the article' });
        } else {
            res.status(201).send({ message: 'Article created successfully', id: result.insertId });
        }
    });
};
