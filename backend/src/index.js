const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://sifoa:sifoa@cluster0-imw4l.mongodb.net/bdfuncionarios?retryWrites=true&w=majority',{
  useNewUrlParser: true
})

app.use(require('./routes'))

app.listen(3333, () => {
  console.log('Servidor rodando')
})

