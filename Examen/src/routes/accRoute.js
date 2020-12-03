const express = require('express');
const routes = express.Router();

const TareaControls = require('../controllers/TareaControls');

routes.get(
	'/', 
	TareaControls.getTareas
);

routes.post(
    '/',
    TareaControls.postTareas
);

routes.get(
    '/',
    TareaControls.getObtener
);

module.exports = routes;