module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
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
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Report)
        User.hasMany(models.Endorsement)
      }
    }
  })

  return User
}
