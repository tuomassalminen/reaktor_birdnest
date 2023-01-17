// Gets an array of drones as input and returns the same drones with distance to the origin added to them
const addDistanceToDrones = (drones) => {
  const origin = 250000;
  const newDrones = drones.map(drone => {
    const distanceY = drone.positionY[0] - origin;
    const distanceX = drone.positionX[0] - origin;
    const distanceToOrigin = Math.sqrt(distanceY * distanceY + distanceX * distanceX);
    return { ...drone, distanceToOrigin };
  });
  return newDrones;
};

// Look for drones that are within the 100 meter radius of the nest/monitoring equipment
const getIllegalDrones = (drones) => {
  const radius = 100000;
  const filteredDrones = drones.filter(drone =>  {
    if (drone.distanceToOrigin <= radius) {
      return true;
    }
  });
  return filteredDrones;
};

module.exports = {
  getIllegalDrones,
  addDistanceToDrones,
};