var express = require('express');
const ProdutoController = require('../controllers/ProdutoController');

var router = express.Router();

router.get('/criar', ProdutoController.criarProduto);
router.get('/deletar', ProdutoController.deletarProduto);

module.exports = router;
