var Promise = require('bluebird')
var _ = require('underscore')
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
  },
  {
    instanceMethods: {
      serialize: function(roles) {
        var base = this.get(roles)

        if (base.reports && base.endorsements) {
          var promise = Promise.resolve(base)
        } else {
          var promise = Promise
            .all(this.getReports(), this.getEndorsements())
            .then(function(reports, endorsements) {
              base.reports = reports
              base.endorsements = endorsements
              return base
            })
        }

        return promise.then(function(data) {
          data.reports = _.pluck(data.reports, "id")
          data.endorsements = _.pluck(data.endorsements, "id")
          return data
        })
      }
    },
    classMethods: {
      associate: function(models) {
        Address.hasMany(models.Report)
        Address.hasMany(models.Endorsement)
      },
      setRoles: function(models) {
        Address.rawAttributes.created_at.roles = { public: false }
        Address.rawAttributes.updated_at.roles = { public: false }
      }
    }
  })

  return Address
}
