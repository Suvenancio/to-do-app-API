module.exports = class TarefaDao {
    
    constructor(bd){
        this.bd = bd
    }
    MostrarTasks(){
        
        return new Promise((resolve,reject) => {
            const query = 'SELECT * FROM TAREFAS'

            this.bd.all(query, (e,res) => {
                if(e) reject(`Erro ao mostrar o BD ${e}`)
                else resolve(res)
            })
        })
    }

    MostrarUmaTask(id){
        return new Promise((resolve,reject) =>{
            const query ='SELECT * FROM TAREFAS WHERE ID = (?)'
            this.bd.all(query,id, (e,res) => {
                if(e) reject(`Erro ao acessar o BD`)
                else resolve(res)
            })
        })
    }

    NewTask(task){
        return new Promise((resolve, reject) =>{
            const query ='INSERT INTO TAREFAS (TITULO,DESCRICAO,STATUS,DATACRIACAO) VALUES (?,?,?,?)'

            this.bd.run(query,Object.values(task), (e) => {
                if(e) reject(`Erro ao adicionar dados BD verifique e tente novamente! ${e} `)
                else resolve('Tarefa adicionada com sucesso!')
            })

        })
        
    }
    DeleteTask(id){
        return new Promise((resolve,reject) => {
            const query = 'DELETE FROM TAREFAS WHERE ID = (?)'

            this.bd.run(query, id,(e) =>{
                if(e) reject(`Erro ao deletar BS ${e}`)
                else resolve('Tarefa Excluida com sucesso!')
            })

        })
        
    }

    PutTask(infos,id){
        return new Promise((resolve,reject)=>{

            const query ='UPDATE TAREFAS SET TITULO = (?), DESCRICAO = (?), STATUS = (?), DATACRIACAO = (?) WHERE ID = (?)'
            const parametros = [infos[0],infos[1],infos[2],infos[3],id]
            console.log(infos)
                
            this.bd.run(query, parametros, (e,res)=>{
                if(e) reject(`Erro ao editar BD ${e}`)
                else resolve('Dentista alterado com sucesso')
            })
         })
    }
}