const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Event = sequelize.define('Event', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.STRING },
});

const Timebased = sequelize.define('Timebased', {
  EventId: { type: DataTypes.INTEGER, primaryKey: true },
  costInHour: { type: DataTypes.INTEGER },
  mainWorkTime: { type: DataTypes.INTEGER },
  overTime: { type: DataTypes.INTEGER },
  firstTwoHourRatio: { type: DataTypes.FLOAT },
  otherHoursRatio: { type: DataTypes.FLOAT },
});

const Piecework = sequelize.define('Piecework', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cost: { type: DataTypes.INTEGER },
  count: { type: DataTypes.INTEGER },
  name: { type: DataTypes.STRING },
});

User.hasMany(Event, { onDelete: 'CASCADE' });
Event.belongsTo(User);

Event.hasOne(Timebased, { onDelete: 'CASCADE' });
Timebased.belongsTo(Event);

Event.hasMany(Piecework, { onDelete: 'CASCADE' });
Piecework.belongsTo(Event);

module.exports = {
  User,
  Event,
  Timebased,
  Piecework,
};
