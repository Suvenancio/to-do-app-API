const express = require('express');
const BodyParser = require('body-parser');
const app = express();
const port = 3000
const usuarios = require('./controller/usuario-controller');
const tarefas = require('./controller/tarefa-controller');
const User = require('./models/Usermodel')
const Tarefa = require('./models/Tarefamodels')
const bd = require('./infra/bd')

app.use(BodyParser.json())


usuarios(app,User, bd)
tarefas(app, Tarefa, bd)



app.listen(port, () => {console.log(`3000`)})
