var express = require('express')
var http = require('http')
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
  http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'))
  })
})
