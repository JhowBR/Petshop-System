/*
Módulo responsavel por controlar todas as requisições que dizem respeito aos
Atendimentos e fazer o direcionamento correto através dos verbos passados.
*/

const Atendimento = require('../models/atendimentos')

module.exports = app => {
    // Buscar todos atendimentos
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    // Buscar atendimento
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    // Add atendimento
    app.post('/atendimentos', (req, res) => {
       const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    }) 

    // Alterar atendimento
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    // Deletar atendimento
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}