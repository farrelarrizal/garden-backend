const express = require("express");
const pushWatering = require("../services/watering");

const router = express.Router();

router.post("/watering", async (req, res) => {
  try {
    const { deviceId, status, createdAt } = req.body;

    if (!status || !deviceId || !createdAt) {
      throw new Error("Insufficient Parameter");
    }

    if (deviceId <= 0 || deviceId > 7) {
      throw new Error("DeviceId must be between 1 and 7");
    }

    if (status != "on" || status != "off") {
      throw new Error("Status must be on or off");
    }

    // call service to post watering
    const data = await pushWatering(deviceId, status, createdAt);
    res.status(200).json({ success: { data } });
  } catch (e) {
    res.status(400).json({ failed: e.message });
  }
});

module.exports = router;
