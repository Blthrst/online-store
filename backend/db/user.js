const {sequelize} = require('./database.js')
const { DataTypes } = require('sequelize')

const User = sequelize.define('User', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    }
})

User.sync({force: true})
.then(() => console.log("USERS TABLE CREATED"))
.catch((err) => console.log("USERS TABLE CREATION ERROR", err))

module.exports = {User}