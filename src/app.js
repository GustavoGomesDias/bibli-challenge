const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://gustavo123:gustavo123@cluster0.5fxqu.mongodb.net/gustavo123?retryWrites=true&w=majority', {
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