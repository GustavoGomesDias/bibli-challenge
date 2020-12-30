const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('Link do seu cluster no MongoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const BookRouter = require('./routes/book-router');

app.use(bodyParser.json());

app.use('/obras', BookRouter).listen(3000, () => {
    console.log("Rodando....");
})
