/*
Módulo para estabelecimento de conexão com o Banco de Dados
*/

// Importando o módulo MySql
const mysql = require('mysql')

// Criando variável de conexão com o banco, com passagem de parâmetros
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

// Exportando a variável conexão
module.exports = conexao