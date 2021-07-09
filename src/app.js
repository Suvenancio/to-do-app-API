const express = require('express');
const BodyParser = require('body-parser');
const app = express();
const port = 3000
const usuarios = require('./controller/usuario-controller');
const tarefas = require('./controller/tarefa-controller');


app.use(BodyParser.json())

usuarios(app)
tarefas(app)



app.listen(port, () => {console.log(`3000`)})
