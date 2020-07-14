const Funcionario = require('../models/Funcionario')

module.exports = {

  async index(req, res) {
    const { page = 1 } = req.query;
    const funcionario = await Funcionario.paginate({}, { page , limit: 10});
    return res.json(funcionario)
  },

  async show(req, res) {
    const { matricula } = req.params;
    const funcionario = await Funcionario.findById(matricula)
    return res.json(funcionario)
  },

  async store(req, res) {
    const funcionario = await Funcionario.create(req.body)
    return res.json(funcionario)
  },

  async update(req, res) {
    const { matricula } = req.params
    const funcionario = await Funcionario.findByIdAndUpdate(matricula, req.body, { new: true })
    return res.json(funcionario)
  },

  async delete(req, res) {
    const { matricula } = req.params
    await Funcionario.findByIdAndRemove(matricula)
    return res.send()
  },
  
}