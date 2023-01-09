import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3001;

const data = [];

const getDrones = () => {
  axios
    .get('https://assignments.reaktor.com/birdnest/drones')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

app.get('/https://assignments.reaktor.com/birdnest/drones', (_req, res) => {
  console.log(res);
  res.send('Hello World!');
});

app.get('/', (_req, res) => {
  getDrones();
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});