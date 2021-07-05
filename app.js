const express = require('express')
const app = express()
const port = 3000

app.get('/usuario', (req, res) => {
  res.send('Rota ativada com get e recurso usuarios: valores de usuarios devem ser retornados')
})
app.get('/tarefa', (req, res) => {
  res.send('Rota ativada com get e recurso tarefa: valores de usuarios devem ser retornados')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
