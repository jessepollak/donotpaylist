"use strict";

var underscore = require('underscore')
var fs        = require("fs")
var path      = require("path")
var Sequelize = require("sequelize")
var env       = process.env.NODE_ENV || "development"
var secrets = require('../config/secrets')
var ssaclAttributeRoles = require('ssacl-attribute-roles')
var _ = require('underscore')
var sequelize = new Sequelize(secrets.db, {
  define: {
    timestamps: true,
    underscored: true
  }
})
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    _.extend(db, model)
    _.extend(sequelize.models, model)
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
  if ("setRoles" in db[modelName]) {
    ssaclAttributeRoles(db[modelName])
    db[modelName].setRoles(db)
  }
});

// set up roles
ssaclAttributeRoles(sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

function serialize(object) {
  if (object) {
    if (_.isArray(object)) {
      return Promise.all(_.map(object, serialize))
    } else if (_.isFunction(object.serialize)) {
      var serialized = object.serialize({ role: 'public' })
      if (_.isFunction(serialized.then)) {
        return serialized.then(serialize)
      } else {
        return serialize(serialized)
      }
    } else if (_.isObject(object)) {
      return Promise.all(_.map(object, function(v, k) {
        return serialize(v).then(function(data) {
          object[k] = v
        })
      })).then(function() {
        return object
      })
    }
  }

  return Promise.resolve(object)
}

db.serialize = serialize
db.middleware = function() {
  return function(req, res, next) {
    res.sendModels = function(object) {
      serialize(object).then(function(data) {
        res.json(data)
      }, next)
    }
    next()
  }
}

module.exports = db;