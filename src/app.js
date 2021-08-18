const express = require('express');
const BodyParser = require('body-parser');
const app = express();
const port = 3010
const usuarios = require('./controller/usuario-controller');
const tarefas = require('./controller/tarefa-controller');

const bd = require('./infra/sqlite-db')
const cors = require('cors')

app.use(express.json())


usuarios(app, bd)
tarefas(app, bd)



app.listen(port, () => {console.log(`3010`)})
