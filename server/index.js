var express = require('express')
var fs = require('fs')
var passport = require('passport')
var epilogue = require('epilogue')
var secrets = require('./config/secrets')


var app = express()

// Bootstrap passport config
require('./config/passport')(app, passport);

// Bootstrap application settings
require('./config/express')(app, passport);
// Bootstrap routes
require('./config/routes')(app, passport);

var models = require('./models')
epilogue.initialize({
  app: app,
  sequelize: models
})

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'))
})
