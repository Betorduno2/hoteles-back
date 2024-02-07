const express = require('express');
const router = express.Router();
const rateController = require('../controllers/rateController');

// Ruta para obtener todas las tarifas
router.get('/', rateController.getAllRates);

// Ruta para crear una nueva tarifa
router.post('/', rateController.createRate);

module.exports = router;