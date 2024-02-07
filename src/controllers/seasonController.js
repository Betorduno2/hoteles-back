const Season = require('../models/Season');

// Obtener todas las temporadas
exports.getAllSeasons = async (req, res) => {
  try {
    const seasons = await Season.find();
    res.json(seasons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva temporada
exports.createSeason = async (req, res) => {
  const season = new Season({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });
  try {
    const newSeason = await season.save();
    res.status(201).json(newSeason);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
