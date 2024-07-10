const db = require("../utils/database")
const { DataTypes } = require("sequelize")


/*
    productStore: {
        id: 0,
        name: '',
        description: '',
        logo: '',
        date_release: '',
        date_revision: ''
    },
    */
const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date_release: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date_revision: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = Product