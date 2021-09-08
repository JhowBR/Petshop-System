/*
Módulo responsável por criar todas as tabelas do Banco.
*/

class Tabelas {
    // Método responsável por chamar os métodos que criam tabelas que recebe um parâmetro de conexão com o banco.
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }

    // Método responsável por criar a tabela de Atendimentos já no banco.
    criarAtendimentos() {
        // Código SQL
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        // Inserção do código no banco, com aviso caso ocorra algum erro
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

// Exportando nova instância da classe
module.exports = new Tabelas