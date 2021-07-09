module.exports = app =>{
    app.get('/tarefas', (req, res) => {
        res.send('Olá Mundo')
      });
    app.post('/tarefas', (req, res) => {
        res.send('Rota POST do tarefa ativada: tarefa adicionado ao banco de dados')
        console.log(req.body)
      })
}