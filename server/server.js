const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Notes = require('./notes');   

const port = 3000;

mongoose.connect('mongodb+srv://schyron:P7ZseBwyPT132cBn@note-app.djfgz.mongodb.net/note-app?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors());
app.use(bodyParser.json());

app.listen(port, function() {
    console.log('Server listening on port'+ port);
});

app.get('/notes', paginatedResults(Notes), (req, res) => {
    res.json(res.paginatedResults);
});

app.post('/notes', (req, res) => {

    try{
        Promise.all([
            Notes.create({
                title: req.body.title,
                description: req.body.description,
                created_on: 'Date when note was created in' + Date.now(),
            })
        ])
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

    res.send('Note successfully added');
});

function paginatedResults(model) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {};

        if (endIndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit,
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit,
            }
        }
        
        try {
            results.results = await model.find().limit(limit).skip(startIndex).exec();
            res.paginatedResults = results;
            next()
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
}