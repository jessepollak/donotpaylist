var restful = require('node-restful')
var Promise = require('bluebird')
var Report = require('../models/report')

exports.postReport = Promise.coroutine(
  function *postReport(req) {
    return 'welcome to the post report controller!';
});

exports.getReport = Promise.coroutine(
  function *getReport(req) {
    return 'welcome to the get report controller!';
});

var addUserBefore = function(req, res, next) {
  req.body.user = req.user.id
}

module.exports = function(router) {
  var reportResource = restful
    .model('report', Report.schema)
    .methods(['get', 'post'])

  reportResource.before('post', addUserBefore)

  reportResource.register(router, '/reports')
}