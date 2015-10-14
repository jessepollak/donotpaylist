var ssaclAttributeRoles = require('ssacl-attribute-roles')
var Sequelize = require('sequelize')
var Promise = require('bluebird')
var models = require('./index')
var AddressUserVotable = require('../lib/mixins/addressUserVotable')

module.exports = function(sequelize, DataTypes) {

  var Report = sequelize.define(
    'report',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      type: {
        type: DataTypes.STRING,
        required: true
      },
      description: DataTypes.STRING
    },
    AddressUserVotable.mixin({}, 'Report', sequelize)
  )

  return Report
}
