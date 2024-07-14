const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./Book');

class BorrowedBook extends Model {}

BorrowedBook.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  book_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Book,
      key: 'id',
    },
  },
  borrow_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  late_fee: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'BorrowedBook',
});

module.exports = BorrowedBook;
