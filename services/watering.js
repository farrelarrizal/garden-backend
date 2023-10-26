const Watering = require("../models/watering");

async function pushWatering(deviceId, status, createdAt) {
  const newWatering = await Watering.create({
    deviceId: deviceId,
    status: status,
    createdAt: ISODate(createdAt),
  });

  return newWatering;
}

// create a function to create an ISO date from string
function ISODate(dateString) {
  const date = new Date(dateString);
  return date.toISOString();
}

module.exports = pushWatering;
