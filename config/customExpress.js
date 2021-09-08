// Importação de módulos
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

// Exportação de função para 
module.exports = () => {
  // Cria uma aplicação Express
  const app = express()
 
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
 
  consign()
    .include('controllers')
    .into(app)
 
  return app
}