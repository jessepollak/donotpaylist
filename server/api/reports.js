var restful = require('node-restful')

var Report = require('../models/report')

module.exports = function(router) {
  var reportResource = restful
    .model('report', Report.schema)
    .methods(['get', 'post'])

  reportResource.register(router, '/reports')
}