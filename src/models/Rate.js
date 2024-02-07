const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  roomType: { type: String, enum: ['estándar', 'premium', 'VIP'], required: true },
  season: { type: mongoose.Schema.Types.ObjectId, ref: 'Season', required: true },
  price: { type: Number, required: true }
});

const Rate = mongoose.model('Rate', rateSchema);

module.exports = Rate;