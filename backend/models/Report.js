const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

class Report extends Model {}

Report.init({
  report_type: {
    type: DataTypes.ENUM('BookUsage', 'OverdueItems', 'UserActivity'),
    allowNull: false,
  },
  report_data: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  generated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  admin_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Report',
});

module.exports = Report;
