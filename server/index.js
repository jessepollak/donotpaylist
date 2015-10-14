var express = require('express')
var fs = require('fs')
var passport = require('passport')
var secrets = require('./config/secrets')

var models = require('./models')

var app = express()

// Bootstrap passport config
require('./config/passport')(app, passport);

// Bootstrap application settings
require('./config/express')(app, passport);
// Bootstrap routes
require('./config/routes')(app, passport);

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'))
})
