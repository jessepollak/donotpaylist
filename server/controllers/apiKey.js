var Promise = require('bluebird')
var series = require('middleware-flow').series
var _ = require('underscore')

var errors = require('../lib/errors')
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

exports.deleteAPIKey = Promise.coroutine(
  function *deleteAPIKey(req, res, next) {
    var key = _.find(req.user.api_keys, (key) => { return key.id = req.params.apiKeyID })
    if (key) {
      key.destroy()
        .then(function() {
          res.json({ success: true })
        }, next)
    } else {
      next(errors.RequiresAuthenticationError)
    }
  }
)

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