const express = require('express');
const routes = express.Router();

//importar contralador
const personasController = require('../controllers/personasController');

//Rutas

//GET
routes.get('/',personasController.listar);

routes.get('/:id',personasController.obtenerPersona);

module.exports = routes;