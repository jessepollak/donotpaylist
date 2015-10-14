module.exports = function(sequelize, DataTypes) {
  var Report = sequelize.define('Report', {
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
  }, {
    classMethods: {
      associate: function(models) {
        Report.belongsTo(models.Address)
        Report.belongsTo(models.User)
      }
    }
  })

  return Report
}
