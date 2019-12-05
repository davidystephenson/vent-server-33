const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define(
  'vent',
  {
    name: Sequelize.STRING,
    open: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }
)
