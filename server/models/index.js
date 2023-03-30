const sequelize = require('../db');
const { DataTypes, UUIDV4 } = require('sequelize');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, require: true },
  password: { type: DataTypes.STRING, require: true },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const AccessLink = sequelize.define('AccessLink', {
  UserId: { type: DataTypes.INTEGER, primaryKey: true },
  activationLink: { type: DataTypes.UUID, defaultValue: UUIDV4 },
  sendingLink: { type: DataTypes.UUID, defaultValue: UUIDV4 },
});

const Event = sequelize.define('Event', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.STRING, require: true },
});

const Timebased = sequelize.define('Timebased', {
  EventId: { type: DataTypes.INTEGER, primaryKey: true },
  costInHour: { type: DataTypes.INTEGER, require: true },
  mainWorkTime: { type: DataTypes.INTEGER, require: true },
  overTime: { type: DataTypes.INTEGER, require: true },
  firstTwoHourRatio: { type: DataTypes.FLOAT, require: true },
  otherHoursRatio: { type: DataTypes.FLOAT, require: true },
});

const Piecework = sequelize.define('Piecework', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cost: { type: DataTypes.INTEGER, require: true },
  count: { type: DataTypes.INTEGER, require: true },
  name: { type: DataTypes.STRING },
});

User.hasMany(Event, { onDelete: 'CASCADE' });
Event.belongsTo(User);

User.hasOne(AccessLink, { onDelete: 'CASCADE' });
AccessLink.belongsTo(User);

Event.hasOne(Timebased, { onDelete: 'CASCADE' });
Timebased.belongsTo(Event);

Event.hasMany(Piecework, { onDelete: 'CASCADE' });
Piecework.belongsTo(Event);

module.exports = {
  User,
  Event,
  Timebased,
  Piecework,
  AccessLink,
};
