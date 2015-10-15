var Promise = require('bluebird')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    clef_id: {
      type: DataTypes.STRING,
      unique: true
    },
    logged_out_at: {
      type: DataTypes.DATE
    }
  }, {
    instanceMethods: {
      createAPIKey: function() {
        return sequelize.models.APIKey.create({ user_id: this.id })
      },
      logout: function() {
        this.logged_out_at = Date.now()
        return this.save()
      }
    },
    classMethods: {
      findOrCreateFromClefAPI: function(information) {
        if (!information.id) {
          return Promise.reject("Invalid Clef ID")
        }

        var defaults = {
          email: information.email
        }

        return User.findOrCreate({ where: { clef_id: String(information.id) }, defaults: defaults })
      },
      findByClefID: function(id) {
        if (!id) {
          return Promise.reject("Invalid Clef ID")
        } else {
          return User.findOne({ where: { clef_id: String(id) }})
        }
      },
      associate: function(models) {
        User.hasMany(models.Report)
        User.hasMany(models.Endorsement)
        User.hasMany(models.APIKey)
      }
    }
  })

  return { User: User }
}
