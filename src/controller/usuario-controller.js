const UserDAO = require('../DAO/UserDAO');
const UserModel = require('../models/Usermodel')

module.exports = (app,bd) =>{

  const DaoUser = new UserDAO(bd)
    app.get('/usuarios', async (req, res) => {
      
        DaoUser.MostrarUser()
          .then((rows) =>{
            res.json({
              result:rows
            })
          })
          .catch((e)=>{
            res.json(e)
          })
      });
      app.get('/usuarios/:ID', async (req, res) => {
        const id = req.params.ID
        DaoUser
        .MostrarUmUser(id)
        .then((rows) =>{
          res.json({
            result:rows
          })
        })
        .catch((e)=>{
          res.json(e)
        })
      });


      app.post('/usuarios', async (req, res) => {
        const{nome, email, senha} = req.body
        const newUsers = new UserModel(nome, email, senha)

        DaoUser
        .NewUser(newUsers)
        .then(()=>{
          res.status(200).json({
            message: "Usuário incluído com sucesso!",
            error: false,
          })
        })
        .catch((e)=>{
          res.status(500).json({
            message: "Erro !!",
            error: true,
          })
        })      

      })

      app.delete('/usuarios/:ID', async (req,res)=>{

        const id = req.params.ID;
        DaoUser.DeleteUser(id)
        .then(()=>{
          res.status(200).json({
            message: "Tarefa deletado com sucesso!"
          })
        })
  
        .catch((e)=>{
          res.status(500).json({
            message: "Erro!"
          })
        })

      })

      app.put('/usuarios/:ID', async (req, res)=>{
        const id = req.params.ID
        const body = req.body
        const infos = [body.nome, body.email, body.senha]
        console.log(infos)

        DaoUser.PutUser(infos,id)
        .then(() =>{
          res.status(200).json({
            message: "Usuário alterdo com sucesso!"
          })
        })
        .catch((e) =>{
          res.status(500).json({
            message: "Erro!"
          })
        })


      })
      
}
