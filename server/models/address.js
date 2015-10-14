module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define('address', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
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
