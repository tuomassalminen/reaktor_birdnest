const express = require('express');
const cors = require('cors');
const path = require('path');
const { PORT } = require('./util/config');
const { connectToDatabase } = require('./util/database');
const services = require('./services');
const utils = require('./util/utils');
const crud = require('./crud');
const { Pilot } = require('./models');
const middleware = require('./util/middleware');

const app = express();

const allowedOrigins = ['http://localhost:8080'];

const options = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use(express.static('public'));

// Fetch drones currently in the zone, catch the illegal drones violating the no-fly zone and return their pilot information.
app.get('/api/pilots', async (_req, res) => {
  const droneList = await services.getDrones();
  const illegalDrones = utils.getIllegalDrones(droneList);
  for (const drone of illegalDrones) {
    const pilot = await services.getPilot(drone);
    await crud.createOrUpdatePilot(pilot, drone.serialNumber[0]);
  }
  await crud.removeOldPilots();
  const pilots = await Pilot.findAll();
  res.send(pilots);
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use(middleware.unknownEndpoint);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};

start();