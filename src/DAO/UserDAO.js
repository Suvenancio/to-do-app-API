module.exports  = class UserDAO {
    constructor(bd){
        this.bd = bd
    }
    MostrarUser(){
        return new Promise((resolve, reject) => {
            this.db.all("Select * from USUARIOS", (err, rows) => {
              if (err) {
                reject(err);
              } else {
                resolve(rows);
              }
            });
          });
    }
    MostrarUmUser(id){
        return new Promise((resolve,reject)=>{

            
            this.bd.all(`SELECT * FROM USUARIOS WHERE ID = (?)`, id, (e, res) =>{
                if(e) reject ('Erro ao acessar BD')
                else resolve(res)
            })
        })
    }

    NewUser(user){
        return new Promise((resolve, reject)=>{
            this.bd.run(`INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)`, Object.values(user), (e,res)=>{
                if(e) reject('Erro ao adicionar Usuário')
                else resolve('Usuário adicionado com sucesso!')
            })
        })
    }
    DeleteUser(id){
        return new Promise((resolve,reject)=>{
            this.bd.run(`DELETE FROM USUARIOS WHERE ID = (?)`, id, (e, res)=>{
                if(e) reject('Erro ao deletar usuário')
                else('Usuário deletado com sucesso!')
            })
        })
    }

    PutUser(infos,id){
        return new Promise((resolve, reject)=>{
            this.bd.run(`UPDATE USUARIOS SET NOME =(?), EMAIL =(?), SENHA = (?) WHERE ID = (?)`[Object.values(infos) + id]), (e,res)=>{
                if(e) reject('Erro ao alterar usuário!')
                else resolve('Usuário alterado com sucesso!')
            }
        })
    }

}