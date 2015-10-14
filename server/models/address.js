var bitcoinAddress = require('bitcoin-address')

module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define('address', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      validate: {
        isBitcoinAddress: function(value) {
          if (!bitcoinAddress.validate(value)) {
            throw new Error(value + " is not a valid Bitcoin address.")
          }
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Address.hasMany(models.Report)
        Address.hasMany(models.Endorsement)
      }
    }
  })

  return Address
}
