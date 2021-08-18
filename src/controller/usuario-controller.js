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
        try{
          const id = req.params.ID
          const user = await DaoUser.MostrarUmUser(id)
          res.status(200).json(user)
        }catch(e){
          res.status.json(e)
        }
      });


      app.post('/usuarios', async (req, res) => {
        const{NOME, EMAIL, SENHA} = req.body
        const newUsers = new UserModel(NOME, EMAIL, SENHA)
      
        try{
          const novoUsuario = await DaoUser.NewUser(newUsers)
          res.status(200).json(novoUsuario)

        }catch(e){
          res.status(500).json(e)
        }
      })

      app.delete('/usuarios/:ID', async (re,res)=>{

        const id = req.params.ID;
        try{

          const deleteUser = await DaoUser.DeleteUser(id)
          res.status(200).json(deleteUser)
        }catch(e){
          res.status(500).json(e)
        }

      })

      app.put('/usuarios/:ID', async (req, res)=>{
        const id = req.body.ID
        const{NOME, EMAIL, SENHA} = req.body
        const newUsers = new UserModel(NOME, EMAIL, SENHA)

        try{
          const alterarUser = await DaoUser(newUsers, id)
          res.status(200).json(alterarUser)
        }catch(e){
          res.status(500).json(e)
        }

      })
      
}
