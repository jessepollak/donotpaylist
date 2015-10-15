var express = require('express')
var fs = require('fs')
var epilogue = require('epilogue')
var secrets = require('./config/secrets')


var app = express()

var models = require('./models')
app.use(models.middleware())

// Bootstrap application settings
require('./config/express')(app)
require('./config/clef')(app)
// Bootstrap routes
require('./config/routes')(app)


models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'))
})
