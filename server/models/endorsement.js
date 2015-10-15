var AddressUserVotable = require('../lib/mixins/addressUserVotable')

module.exports = function(sequelize, DataTypes) {
  var Endorsement = sequelize.define(
    'endorsement',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      }
    },
    AddressUserVotable.mixin({}, 'Endorsement', sequelize)
  )

  return { Endorsement: Endorsement }
}
