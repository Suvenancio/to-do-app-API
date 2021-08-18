module.exports  = class UserDAO {
    constructor(bd){
        this.bd = bd
    }
    MostrarUser(){
        return new Promise((resolve,reject) => {
            const query = 'SELECT * FROM USUARIOS'

            this.bd.all(query, (e,res) => {
                if(e) reject(`Erro ao mostrar o BD ${e}`)
                else resolve(res)
            })
        })
    }
    MostrarUmUser(id){
        return new Promise((resolve,reject) =>{
            const query ='SELECT * FROM USUARIOS WHERE ID = (?)'
            this.bd.all(query,id, (e,res) => {
                if(e) reject(`Erro ao acessar o BD`)
                else resolve(res)
            })
        })
    }

    NewUser(user){
        return new Promise((resolve, reject) =>{
            const query ='INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)'

            this.bd.run(query,Object.values(user), (e) => {
                if(e) reject(`Erro ao adicionar dados BD verifique e tente novamente! ${e} `)
                else resolve('Usuário adicionado com sucesso!')
            })

        })
    }
    DeleteUser(id){
        return new Promise((resolve,reject) => {
            const query = 'DELETE FROM USUARIOS WHERE ID = (?)'

            this.bd.run(query, id,(e) =>{
                if(e) reject(`Erro ao deletar usuário ${e}`)
                else resolve('Usuário excluído com sucesso!')
            })

        })
    }

    PutUser(infos,id){
        return new Promise((resolve,reject)=>{

            const query ='UPDATE USUARIOS SET NOME = (?), EMAIL = (?), SENHA = (?) WHERE ID = (?)'
            const parametros = [infos[0],infos[1],infos[2], id]
            console.log(infos)
                
            this.bd.run(query, parametros, (e,res)=>{
                if(e) reject(`Erro ao ALTERAR BD ${e}`)
                else resolve('Usuário alterado com sucesso')
            })
         })
    }

}