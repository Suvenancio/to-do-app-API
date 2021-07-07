module.exports = app =>{
    app.get('/tarefas', (req, res) => {
        res.send('Olá Mundo')
      })
}