var Promise = require('bluebird')
var series = require('middleware-flow').series

var authentication = require('../lib/authentication')
var models = require('../models')
var APIKey = models.APIKey

function addUser(req, res, next) {
  req.body.user_id = req.user.id
  next()
}

exports.postAPIKey = [
  addUser,
  Promise.coroutine(
    function *postAPIKey(req, res, next) {
      return APIKey.createFromAPI(req.body)
        .then(function(object) {
          res.sendModels(object)
        }, next)
    }
  )
]

exports.getAPIKeys = [
  authentication.restrict(),
  Promise.coroutine(
    function *getAPIKeys(req, res, next) {
      return req.user.getAPIKeys()
        .then(function(object) {
          res.sendModels(object)
        }, next)
    }
  )
]