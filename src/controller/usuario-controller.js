module.exports = app =>{
    app.get('/usuarios', (req, res) => {
        res.send('Rastreamento da aplicação sendo feito com nodemon')
      });


      app.post('/usuarios', (req, res) => {
        
        res.send('Rota POST do usuario ativada: usuario adicionado ao banco de dados');
        console.log(req.body)
      })
      
}




