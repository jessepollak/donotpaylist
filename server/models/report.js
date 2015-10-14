var Sequelize = require('sequelize')
var Promise = require('bluebird')

module.exports = function(sequelize, DataTypes) {
  var Report = sequelize.define('report', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      required: true
    },
    description: DataTypes.STRING
  },
  {
    classMethods: {
      createFromAPI: function(body) {
        return Report.create(body)
      },
      associate: function(models) {
        Report.belongsTo(models.Address)
        Report.belongsTo(models.User)
      }
    },
    validate: {
      onlyOnePerUserAndAddress: function(next) {
        Report.findOne({ user_id: this.user_id, address_id: this.address_id })
          .then(function(obj) {
            if (obj) {
              next(new Sequelize.ValidationError('You can only create one report per address.'))
            } else {
              next()
            }
          }, next)
      }
    }
  })

  return Report
}
