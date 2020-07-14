const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const FuncionarioSchema = new mongoose.Schema({
  matricula: String,
  nome: String,
  funcao: String,
  salario: String,
  

}, {
  timestamps: true
})

FuncionarioSchema.plugin(mongoosePaginate)
module.exports = mongoose.model("Funcionario", FuncionarioSchema)

