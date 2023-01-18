require('dotenv').config();

module.exports = {
  DB_SCHEMA: process.env.DB_SCHEMA || 'postgres',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 5432,
  PORT: process.env.PORT || 5000,
};