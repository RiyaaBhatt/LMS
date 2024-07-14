const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

class Notification extends Model {}

Notification.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  notification_type: {
    type: DataTypes.ENUM('Email', 'SMS'),
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Sent', 'Pending'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Notification',
});

module.exports = Notification;
