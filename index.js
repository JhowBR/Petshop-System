const customExpress = require('./config/customExpress')

const conexao = require('./infraestrutura/conexao');

const tabelas = require('./infraestrutura/tabelas');

const app = customExpress()

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Banco conectado')
        tabelas.init(conexao)
        app.listen(3000, () => console.log('Server na porta 3000'))
    }
})


