const express = require('express');
const { uploadSignature, uploadMiddleware } = require('../controllers/testFormController');

// -----------> DEFINICIÓN DE ENRUTADORES <-----------
const testFormRouter = express.Router();

// -----------> DIRECCIONAMIENTO DE SOLITUDES <-----------
testFormRouter.post('/', uploadMiddleware, uploadSignature);

// -----------> EXPORTACIÓN MÓDULO <-----------
module.exports = {
  testFormRouter
};