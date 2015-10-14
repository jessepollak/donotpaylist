"use strict";

var fs        = require("fs")
var path      = require("path")
var Sequelize = require("sequelize")
var env       = process.env.NODE_ENV || "development"
var secrets = require('../config/secrets')
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
    var capitalizedName = model.name.charAt(0).toUpperCase() + model.name.slice(1)
    db[capitalizedName] = model
    sequelize.models[capitalizedName] = model
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;