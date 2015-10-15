var Promise = require('bluebird')
var hat = require('hat')

module.exports = function(sequelize, DataTypes) {
  var APIKey = sequelize.define('api_key', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: hat,
      unique: true
    },
    secret: {
      type: DataTypes.STRING,
      defaultValue: hat,
      unique: true
    }
  },
  {
    instanceMethods: {
      serialize: function(scope) {
        return this.get(scope)
      }
    },
    classMethods: {
      createFromAPI: function(data) {
        return APIKey.create(data)
      },
      associate: function(models) {
        APIKey.belongsTo(models.User)
      }
    }
  })

  return { APIKey: APIKey }
}
