/*
Início da aplicação: conexão e abertura de servidor
*/

// Importação de módulos e classes
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

// Estabelecimento de conexão com o Banco ou retorno de erro.
conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        // Chamada do método init e criação de tabelas.
        Tabelas.init(conexao)
        
        // 
        const app = customExpress()

        // Servidor escutando
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})
