const Tarefa = require('../models/Tarefamodels');
const TarefaDao = require('../DAO/TarefaDAO')


module.exports = (app, bd)  =>{

    const DaoTarefa = new TarefaDao(bd)
   
    app.get("/tarefas", (req, res) => {
       DaoTarefa.MostrarTasks()
        .then((rows) =>{
          res.json({
            result:rows
          })
        })
        .catch((e)=>{
          res.json(e)
        })
    });

      app.get('/tarefas/:ID', (req, res) => {
        const id = req.params.ID
        DaoTarefa
        .MostrarUmaTask(id)      
        .then((rows)=>{
            res.status(200).json({
              result: rows
            })
        })
        .catch((e)=>{
          res.status(500).json(e)
        })
        });


    app.post('/tarefas', (req, res) => {
     const {titulo, descricao, status, datadecriacao} = req.body ;
     const Tasks = new Tarefa(titulo, descricao, status, datadecriacao)
      console.log(Tasks)
      DaoTarefa
        .NewTask(Tasks)
        .then(()=>{
          res.status(200).json({
            message: "Tarefa incluída com sucesso!",
            error: false,
          })
        })
        .catch((e)=>{
          res.status(500).json({
            message: "Erro !!",
            error: true,
          })
        })      
      });

      app.delete('/tarefas/:ID', (req,res)=>{
        const id = req.params.ID
        const {TITULO, DESCRICAO, STATUS,DATACRIACAO} =req.body
        const Tasks = new Tarefa(TITULO, DESCRICAO, STATUS,DATACRIACAO)

        DaoTarefa
          .DeleteTask(id)
          .then(()=>{
            res.status(200).json({
              message: "Tarefa deletada com sucesso!"
            })
          })
    
          .catch((e)=>{
            res.status(500).json({
              message: "Erro!"
            })
          })
      })

      app.put('/tarefas/:ID',(req,res)=>{
        const id = req.params.ID
        const body = req.body
        const infos = [body.titulo, body.descricao, body.status, body.datadecriacao]
        console.log(infos)
        
        DaoTarefa.PutTask(infos,id)
        .then(() =>{
          res.status(200).json({
            message: "Tarefa alterda com sucesso!"
          })
        })
        .catch((e) =>{
          res.status(500).json({
            message: "Erro!"
          })
        })

      })
}