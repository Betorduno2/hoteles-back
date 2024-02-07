const express = require('express');
const router = express.Router();
const seasonController = require('../controllers/seasonController');

// Ruta para obtener todas las temporadas
router.get('/', seasonController.getAllSeasons);

// Ruta para crear una nueva temporada
router.post('/', seasonController.createSeason);

module.exports = router;