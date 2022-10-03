const express = require('express');
const rotasProdutos = require('./routes/rotasProduto');
let app = express();

app.get('/', (req, res)=> res.send('Olá Filipe!'));
app.get('./contatos', (req, res) => res.send("Página contatos"));

app.use('/produtos', rotasProdutos);

/**
 * Criando um servidor
 */

app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"))
