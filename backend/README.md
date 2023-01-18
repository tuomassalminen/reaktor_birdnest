# Birdnest backend

This is a Node.js backend for Birdnest app

## Requirements

In order to run the application locally, you'll need Node and npm. If you haven't installed Node or npm, nvm is an easy to use tool for installing both. Nvm is also handy if you want to quickly switch between different Node versions.

If you don't have nvm you can install it by running this script:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Then node can be installed by:

```sh
nvm install node
```

If you want to use [Docker] (https://www.docker.com/products/docker-desktop/) you need to download it

To run the application locally, you'll also need to set up PostgreSQL database for getting database connection strings. An easy way to get started is to use [ElephantSQL](https://www.elephantsql.com/), which is a cloud hosted PostgreSQL solution.

## Getting started

1. Clone this repository and run `docker-compose up` in the `dx-backend-v2` directory. And that's it, now you have an running development instance of this application running at http://localhost:3001.

### General

## Running the tests

The application is equipped with unit and integration tests. Depending on your preference, you can run the tests following way:

> Note that the test are run against the database which you have specified with `TEST_MONGODB_URI` variable. Tests will clear all the previous data in database.

### Option 1 – using Docker

1. Run `docker-compose -f docker-compose.test.yml up --abort-on-container-exit` and automatic tests will launch. You can also launch the same script by `npm run test:container` if you have Node installed.

### Option 2 – local environment

1. Run `npm test` and automatic tests will launch.

