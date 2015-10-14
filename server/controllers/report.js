var restful = require('node-restful')

var Report = require('../models/report')

var addUserBefore = function(req, res, next) {
  req.body.user = req.user.id
  next()
}

module.exports = function(router) {
  var reportResource = restful
    .model('report', Report.schema)
    .methods(['get', 'post'])

  reportResource.before('post', addUserBefore)

  reportResource.register(router, '/reports')
}