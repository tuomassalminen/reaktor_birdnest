const axios = require('axios');
const parseString = require('xml2js').parseString;

const getDrones = async () => {
  let droneList = [];
  try {
    const response = await axios('https://assignments.reaktor.com/birdnest/drones');
    const dronesXml = response.data;
    // Parse XML string into javascript object
    parseString(dronesXml, (err, result) => {
      droneList = result.report.capture[0].drone; // List of the drones seen by the machine
    });
  } catch (error) {
    console.log(error);
  }
  return droneList;
};

const getPilot = async (droneSerialNumber) => {
  let pilot;
  try {
    const response = await axios(`https://assignments.reaktor.com/birdnest/pilots/${droneSerialNumber}`);
    pilot = response.data;
  } catch (error) {
    console.error(error);
  }
  return pilot;
};

module.exports = {
  getDrones,
  getPilot,
};