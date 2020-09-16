const express = require('express');

const UserController = require('./controllers/UserController');
const TransactsController = require('./controllers/TransactsController');
const FormController = require('./controllers/FormController');
const BalanceController = require('./controllers/BalanceController');
const InvestController = require('./controllers/InvestController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.get('/users/:user_id/transactions', TransactsController.index);
routes.post('/users/:user_id/transactions', TransactsController.store);

routes.get('/users/:user_id/forms', FormController.index);
routes.post('/users/:user_id/forms', FormController.store);

routes.get('/users/:user_id/balanceupdates', BalanceController.index);
routes.post('/users/:user_id/balanceupdates', BalanceController.store);

routes.get('/users/:user_id/investments', InvestController.index);
routes.post('/users/:user_id/investments', InvestController.store);

module.exports = routes;