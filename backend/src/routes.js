const { Router } = require('express')

const FuncionarioController = 
    require('./controllers/FuncionarioController')

const routes = new Router();

routes.get('/funcionario', FuncionarioController.index)
routes.get('/funcionario/:matricula', FuncionarioController.show)
routes.post('/funcionario', FuncionarioController.store)
routes.put('/funcionario/:matricula', FuncionarioController.update)
routes.delete('/funcionario/:matricula', FuncionarioController.delete)

module.exports = routes