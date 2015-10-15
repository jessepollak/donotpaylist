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
  }, {
    classMethods: {
      associate: function(models) {
        APIKey.belongsTo(models.User)
      }
    }
  })

  return { APIKey: APIKey }
}
