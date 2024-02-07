const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// Ruta para obtener todos los hoteles
router.get('/', hotelController.getAllHotels);

// Ruta para crear un nuevo hotel
router.post('/', hotelController.createHotel);

module.exports = router;
