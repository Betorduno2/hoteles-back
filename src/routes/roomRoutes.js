const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Ruta para obtener todas las habitaciones
router.get('/', roomController.getAllRooms);

// Ruta para crear una nueva habitación
router.post('/', roomController.createRoom);

module.exports = router;