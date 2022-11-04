const mensajeRouter = require('express').Router();
const controller = require('./controllers');
const isAuthorizated = require('../middlewares/authorization.middleware')

mensajeRouter.get('/:de',isAuthorizated, controller.obtenerChat);

module.exports = mensajeRouter;