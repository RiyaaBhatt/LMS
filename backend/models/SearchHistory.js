const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

class SearchHistory extends Model {}

SearchHistory.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  search_query: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  search_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'SearchHistory',
});

module.exports = SearchHistory;
