
module.exports = (app, User,bd) =>{
    app.get('/usuarios', (req, res) => {
        res.send('Rastreamento da aplicação sendo feito com nodemon')
      });


      app.post('/usuarios', (req, res) => {
        let usuario = new User(req.body.nome, req.body.email, req.body.senha)
        bd.user.push(usuario)
        res.send('Usuário criado');
        console.log(req.body)
      })
      
}
