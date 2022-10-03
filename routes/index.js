var express = require('express');
const ProdutoController = require('../controllers/ProdutoController');

var router = express.Router();

router.get('/criar', ProdutoController.criarProduto);
router.get('deletar', (req, res)=> res.send("Deletando um produto"));

module.exports = router;
