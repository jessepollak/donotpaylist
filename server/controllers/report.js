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
          res.send('ok')
        }, next)
    }
  )
]

exports.getReport = Promise.coroutine(
  function getReport(req, res) {
    return models.Report.findOne()
      .then(res.send, res.send)
  }
)