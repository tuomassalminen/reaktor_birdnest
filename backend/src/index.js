const express = require('express');
const cors = require('cors');
const services = require('./services');
const utils = require('./utils');

const app = express();
const PORT = 3001;

const allowedOrigins = ['http://localhost:8080'];

const options = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.get('/pilots', async (_req, res) => {
  const droneList = await services.getDrones();
  const illegalDrones = utils.getIllegalDrones(droneList);
  const pilots = [];
  for (const drone of illegalDrones) {
    const pilot = await services.getPilot(drone.serialNumber[0]);
    pilots.push(pilot);
  }
  res.send(pilots);
});

app.get('/', (_req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});