# Birdnest

This is a solution for Reaktor developer trainee pre-assignment.

## Running the application

## Backend

The backend of this application can be run either in Docker or locally with Node and npm. Docker can be downloaded [here] (https://www.docker.com/products/docker-desktop/). 
If you haven't installed Node or npm, it can be done easily with nvm by running this script:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Then node can be installed by:

```sh
nvm install node
```

### Starting the server

Start the server with Docker by running `docker-compose up`

Start the server with npm by first running `npm install` and then `npm run dev`

If you are not using Docker, you need to create a PostgreSQL database and connect the server to it in the database.js file. [ElephantSQL] (https://www.elephantsql.com/) is a good and easy to use solution for creating such database.
If you use Docker, the database is created in the container and the application connects to it automatically.

## Frontend

The frontend can be started by running the commands `npm install` and `npm run dev`, provided you have Node and npm installed on your machine.

## Running the tests

Running `npm test` in both frontend and backend folders will run unit tests
