const express = require('express')
const app = express()
const port = 3000
const usuarios = require('./controllers/usuario-controller');
const tarefas = require('./controllers/tarefa-controller');

usuarios(app)
tarefas(app)

app.listen(port, () => {console.log(`3000`)})
