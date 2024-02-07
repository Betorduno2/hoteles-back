const Rate = require('../models/Rate');

// Obtener todas las tarifas
exports.getAllRates = async (req, res) => {
  try {
    const rates = await Rate.find();
    res.json(rates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva tarifa
exports.createRate = async (req, res) => {
  const rate = new Rate({
    hotel: req.body.hotel,
    roomType: req.body.roomType,
    season: req.body.season,
    price: req.body.price
  });
  try {
    const newRate = await rate.save();
    res.status(201).json(newRate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
