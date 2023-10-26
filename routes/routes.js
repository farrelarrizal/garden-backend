const express = require("express");
const pushWatering = require("../services/watering");

const router = express.Router();

// create a route to get all watering data
// example request: http://localhost:3000/api/watering?deviceId=1&status=on&createdAt=1698352243
router.get("/watering", async (req, res) => {
  try {
    const deviceId = parseInt(req.query.deviceId);
    const status = req.query.status;
    const createdAt = req.query.createdAt;

    if (!status || !deviceId || !createdAt) {
      throw new Error("Insufficient Parameter");
    }

    if (deviceId <= 0 || deviceId > 7) {
      throw new Error("DeviceId must be between 1 and 7");
    }

    if (status === "on" || status === "off") {
    } else {
      throw new Error("Status must be on or off");
    }

    // Call service to handle the GET request
    const data = await pushWatering(deviceId, status, createdAt);
    res.status(200).json({ data: data });
  } catch (e) {
    res.status(400).json({ failed: e.message });
  }
});

router.post("/watering", async (req, res) => {
  req.httpVersion = "1.0";
  try {
    const { deviceId, status, createdAt } = req.body;

    if (!status || !deviceId || !createdAt) {
      throw new Error("Insufficient Parameter");
    }

    if (deviceId <= 0 || deviceId > 7) {
      throw new Error("DeviceId must be between 1 and 7");
    }

    if (status === "on" || status === "off") {
    } else {
      throw new Error("Status must be on or off");
    }

    // call service to post watering
    const data = await pushWatering(deviceId, status, createdAt);
    res.status(200).json({ data: { data } });
  } catch (e) {
    res.status(400).json({ failed: e.message });
  }
});

module.exports = router;
