const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' });;

// Use this when connecting to docker locally
// const sequelize = new Sequelize(
//   config.DB_SCHEMA,
//   config.DB_USER,
//   config.DB_PASSWORD,
//   {
//     host: config.DB_HOST,
//     port: config.DB_PORT,
//     dialect: 'postgres',
//   }
// );

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