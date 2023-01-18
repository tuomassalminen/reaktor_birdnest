const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

class Pilot extends Model {}

Pilot.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  latestViolation: {
    type: DataTypes.DATE,
    allowNull: false
  },
  currentDroneDistance: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  closestDroneDistance: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  droneSerialNumber: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  droneCoords: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false,
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'pilot'
});

module.exports = Pilot;