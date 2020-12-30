const Book = require('../controllers/book-controller');

exports.get = async (req, res) => {
    try{
        const data = await Book.find();
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message: "Falha na requisição!"
        })
    }
}