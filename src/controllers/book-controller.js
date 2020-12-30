const Book = require('../models/book-model');

exports.get = async (req, res) => {
    try{
        const data = await Book.find();
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message: "Falha na requisição!"
        });
    }
}

exports.getById = async (req, res) => {
    try{
        const data = await Book.findById(req.params.id);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message: "Falha na requisição!"
        });
    }
}

exports.post = async (req, res) => {
    try{
        const product = new Book(req.body);
        await product.save();
        res.status(200).send(product);
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message: "Falha na requisição!"
        });
    }
}

exports.update = async (req, res) => {
    try{
        await Book.findByIdAndUpdate(req.params.id, {
            $set: {
                titulo: req.body.titulo,
                editora: req.body.editora,
                foto: req.body.foto,
                autores: req.body.autores,
            }
        });
        res.status(200).send({ message: "Livro alterado com sucesso!" });
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message: "Falha na requisição!"
        });
    }
}

exports.delete = async (req, res) => {
    try{
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Livro excluido com sucesso com sucesso!" });
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message: "Falha na requisição!"
        });
    }
}