var Promise = require('bluebird')
var models = require('../models')
var Report = models.Report

function addUser(req, res, next) {
  req.body.user_id = req.user.id
  next()
}

exports.postReport = [
  addUser,
  Promise.coroutine(
    function *postReport(req, res, next) {
      return Report.createFromAPI(req.body)
        .then(function(object) {
          res.sendModels(object)
        }, next)
    }
  )
]

exports.getReport = Promise.coroutine(
  function *getReport(req, res, next) {
    return models.Report.findOne().then(res.sendModels, next)
  }
)