// Look for drones that are within the 100 meter radius of the nest/monitoring equipment
const getIllegalDrones = (drones) => {
  const origin = 250000;
  const radius = 100000;
  const dronesWithDistance = drones.map(drone => {
    const distanceY = drone.positionY[0] - origin;
    const distanceX = drone.positionX[0] - origin;
    const distanceToOrigin = Math.sqrt(distanceY * distanceY + distanceX * distanceX);
    return { ...drone, distance: distanceToOrigin };
  });
  const filteredDrones = dronesWithDistance.filter(drone =>  {
    if (drone.distance <= radius) {
      return true;
    }
  });
  return filteredDrones;
};

module.exports = {
  getIllegalDrones
};