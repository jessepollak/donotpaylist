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
      type: DataTypes.INTEGER
    }
  }, {
    instanceMethods: {
      createAPIKey: function() {
        return sequelize.models.APIKey.create({ user_id: this.id })
      }
    },
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Report)
        User.hasMany(models.Endorsement)
        User.hasMany(models.APIKey)
      }
    }
  })

  return { User: User }
}
