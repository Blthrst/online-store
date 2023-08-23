const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize("store.db", "admin", "12345", {
    dialect: 'sqlite',
    storage: './store.db'
})

const Clothes = sequelize.define("Clothes", {
    id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
})

sequelize.authenticate()
.then(() => console.log("DB AUTHENTICATED"))
.catch((err) => console.log("AUTH ERROR", err))

Clothes.sync()
.then(() => console.log("TABLE CREATED"))
.catch((err) => console.log("TABLE CREATION ERROR", err))



module.exports = {Clothes, sequelize}