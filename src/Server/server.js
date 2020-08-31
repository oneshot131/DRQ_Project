const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-dmuq6.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const Schema = mongoose.Schema;
const tvShowSchema = new Schema({
    title: String,
    year: String,
    poster: String
})

const TvShowModel = mongoose.model('tvShows', tvShowSchema)

app.delete('/api/tvshows/:id', (req, res) => {
    console.log(req.params.id); 
    TvShowModel.deleteOne({ _id: req.params.id }, (error, data) => { 
        if (error)
            res.json(error);
        res.json(data);
    })
})

app.get('/api/tvShows/:id', (req, res) => {

    console.log(req.params.id);

    TvShowModel.findById(req.params.id, (error, data) => {
        res.json(data);

    })
})

app.put('/api/tvShows/:id', (req, res) => {
    console.log("edit: " + req.params.id);
    TvShowModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})

app.get('/api/tvShows', (req, res) => {

    TvShowModel.find((error, data) => {

        res.json({ tvshows: data })
    })
})

app.post('/api/tvshows', (req, res) => {
    console.log('Tv Show Recieved');
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.poster);
    console.log(req.body.year);

    TvShowModel.create({
        title: req.body.title,
        year: req.body.poster,
        poster: req.body.year,
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))