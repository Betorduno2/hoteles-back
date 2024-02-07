const Room = require('../models/Room');

// Obtener todas las habitaciones
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva habitación
exports.createRoom = async (req, res) => {
  const room = new Room({
    hotel: req.body.hotel,
    type: req.body.type,
    capacity: req.body.capacity,
    availability: req.body.availability
  });
  try {
    const newRoom = await room.save();
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
