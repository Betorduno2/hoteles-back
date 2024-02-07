const Hotel = require('../models/Hotel');

// Obtener todos los hoteles
exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo hotel
exports.createHotel = async (req, res) => {
  const hotel = new Hotel({
    name: req.body.name,
    city: req.body.city
  });
  try {
    const newHotel = await hotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
