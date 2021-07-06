class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimento()
        this.criarCliente()
    }

    criarAtendimento(){
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (
            id 
                int
                NOT NULL
                AUTO_INCREMENT,
            cliente
                varchar(50)
                NOT NULL,
            pet
                varchar(20),
            servico
                varchar(20)
                NOT NULL,
            status
                varchar(20)
                NOT NULL,
            observacoes
                text,
            PRIMARY KEY(ID)
            )`
        
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Atendimentos criada')
            }
        })
    }

    criarCliente(){
        const sql = `CREATE TABLE IF NOT EXISTS Cliente (
            id 
                int
                NOT NULL
                AUTO_INCREMENT,
            nome
                varchar(50)
                NOT NULL,
            sexo
                varchar(20),
            data_nascimento
                date
                NOT NULL,
            telefone
                varchar(20)
                NOT NULL,
            email
                varchar(60),
            endereco
                varchar(60)
                NOT NULL,
            bairro
                varchar(30)
                NOT NULL,
            cidade
                varchar(30)
                NOT NULL,
            estado
                varchar(30)
                NOT NULL,
            PRIMARY KEY(ID)
            )`
        
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Cliente criada')
            }
        })
    }
}

module.exports = new Tabelas