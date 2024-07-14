const sequelize = require('../config/database');
const User = require('../models/User')

async function checkDatabaseConnection() {
    const newUser = await User.create({
        id: "hmnnirmal@gmail.com",
        username: "himanshu",
        password: "123",
        role: "User"
      });
      console.log(newUser)
}

checkDatabaseConnection();
