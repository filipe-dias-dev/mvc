const express = require('express');
const rotasProdutos = require('./routes/rotasProduto');
let app = express();

app.get('/', (req, res)=> res.send('Olá Filipe!'));

app.get('./contatos', (req, res) => res.send("Página contatos"));

app.use('/produtos', rotasProdutos);

/**
 * Rotas Parametrizadas
 */

app.get('produtos/:id', (req, res)=> {
  let id = req.params.id
})

/**
 * Criando um servidor
 */

app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"))
