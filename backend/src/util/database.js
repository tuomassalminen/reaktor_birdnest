const { Sequelize } = require('sequelize');
const config = require('./config');

let sequelize = new Sequelize('postgres://postgres:ykGm7g41juAzjs7@birdnest-monitor-db.internal:5432');

// if (config.NODE_ENV === 'production') {
//   sequelize = new Sequelize('postgres://postgres:ykGm7g41juAzjs7@birdnest-monitor-db.internal:5432');
// } else {
//   sequelize = new Sequelize(
//     config.DB_SCHEMA,
//     config.DB_USER,
//     config.DB_PASSWORD,
//     {
//       host: config.DB_HOST,
//       port: config.DB_PORT,
//       dialect: 'postgres',
//     }
//   );
// }

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