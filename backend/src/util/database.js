const { Sequelize } = require('sequelize');
const config = require('./config');

let sequelize = new Sequelize(
  config.DB_SCHEMA,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: 'postgres',
  }
);

sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' }); // Comment this out when running the application on docker


const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('database connected');
  } catch (err) {
    console.log('connecting database failed');
    return process.exit(1);
  }

  return null;
};

module.exports = {
  sequelize,
  connectToDatabase
};