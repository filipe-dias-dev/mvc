/**
 * Chamando o express criando um servidor para mostrar toda a nossa aplicação no navegador.
 */
const express = require('express')
/**
 * Estanciando o express e guardando na variavel app
 */
const app = express();

/**
 * A ferramenta que vamos usar é o ejs para redenrizar o html.
 */
app.set("view engine", "ejs")

/**
 * Criando uma rota do método get devolvendo como uma resposta index.
 */

app.get("/", function (req, res) {
    res.render("index")
})

/**
 * Criando uma rota do método get devolvendo como uma resposta about.
 */
app.get("/sobre", function (req, res) {
    res.render("about")
})

/**
 * Escutando a porta 8080 e quando chamar no navegador ele executa a função.
 */
app.listen(8080);
console.log('ola')


