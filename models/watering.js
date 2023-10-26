const mongoose = require("mongoose");
const { Schema } = mongoose;

const wateringSchema = new mongoose.Schema({
  deviceId: {
    required: true,
    type: Number,
  },
  status: {
    required: true,
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    immutable: true,
  },
});

module.exports = mongoose.model("Watering", wateringSchema);
