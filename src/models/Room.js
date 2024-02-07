const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  type: { type: String, enum: ['estándar', 'premium', 'VIP'], required: true },
  capacity: { type: Number, required: true },
  availability: [{ type: Date, default: [], required: true }]
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;