var Sequelize = require('sequelize')
var _ = require('underscore')

var validate = function(modelName, sequelize) {
  return {
    onlyOnePerUserAndAddress: function(next) {
      var Model = sequelize.models[modelName]
      Model.findOne({ user_id: this.user_id, address_id: this.address_id })
        .then(function(obj) {
          if (obj) {
            next(new Sequelize.ValidationError('You can only create one ' + modelName + ' per address.'))
          } else {
            next()
          }
        }, next)
    }
  }
}

var classMethods = function(modelName, sequelize) {
  return {
    createFromAPI: function(body) {
      var Model = sequelize.models[modelName]
      return Model.create(body)
    },
    associate: function(models) {
      var Model = models[modelName]
      Model.belongsTo(models.Address)
      Model.belongsTo(models.User)
    },
    setRoles: function(models) {
      var Model = models[modelName]
      Model.rawAttributes.user_id.roles = { public: false }
      Model.rawAttributes.created_at.roles = { public: false }
      Model.rawAttributes.updated_at.roles = { public: false }
    }
  }
}

var instanceMethods = function() {
  return {
    serialize: function(roles) {
      return Promise.resolve(this.get(roles))
    }
  }
}

var hooks = function(modelName, sequelize) {
  return {
    beforeCreate: function createRelevantAddress(model, options, next) {
      return sequelize.models.Address
        .findOrCreate({ where: { id: model.address_id }})
          .then(next.bind(null, null), next)
    }
  }
}

module.exports.mixin = function(object, modelName, sequelize) {
  return _.extend(object, {
    instanceMethods: instanceMethods(modelName, sequelize),
    classMethods: classMethods(modelName, sequelize),
    hooks: hooks(modelName, sequelize),
    validate: validate(modelName, sequelize)
  })
}