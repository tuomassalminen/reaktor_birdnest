const { Pilot } = require('./models');
const { Op } = require('sequelize');

// Check if the pilot is already in the database and update it, and create new one if not found
const createOrUpdatePilot = async (pilot, droneSerialNumber) => {
  const pilotDb = await Pilot.findOne({ where: { droneSerialNumber } });
  if (pilotDb === null) {
    pilot.closestDroneDistance = pilot.currentDroneDistance;
    await Pilot.create(pilot);
  } else {
    pilotDb.latestViolation = new Date();
    if (pilot.currentDroneDistance < pilotDb.closestDroneDistance) {
      pilotDb.closestDroneDistance = pilot.currentDroneDistance;
    }
    await pilotDb.save();
  }
};

// Remove pilots not seen in 10 minutes by the equipment
const removeOldPilots = async () => {
  await Pilot.destroy({
    where: {
      latestViolation: {
        [Op.lte]: new Date(new Date() - 1000 * 60 * 10)
      }
    }
  });
};

module.exports = {
  createOrUpdatePilot,
  removeOldPilots
};