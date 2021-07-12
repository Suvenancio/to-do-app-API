
module.exports = (app,Tarefa, bd)  =>{
    app.get('/tarefas', (req, res) => {
        res.send('Olá Mundo')
      });
    app.post('/tarefas', (req, res) => {
      let tar = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.datadecriacao);

      bd.tarefas.push(tar)
        res.send('Tarefa criada com sucesso')
        console.log(req.body)
      
      })
}