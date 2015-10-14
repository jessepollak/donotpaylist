module.exports = function(sequelize, DataTypes) {
  var Endorsement = sequelize.define('endorsement', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Endorsement.belongsTo(models.Address)
        Endorsement.belongsTo(models.User)
      }
    }
  })

  return Endorsement
}
