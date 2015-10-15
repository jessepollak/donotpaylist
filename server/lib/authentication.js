var secret = require('../config/secrets')
var models = require('../models')
var errors = require('../lib/errors')
var basicAuth = require('basic-auth')
var unless = require('express-unless')
var series = require('middleware-flow').series

var apiKeyAuth = function(req, res, next) {
  var auth = basicAuth(req)
  if (auth) {
    models.APIKey
      .find({ where: { id: auth.name, secret: auth.pass }, include: [models.User] })
      .then(function(key) {
        if (key) {
          req.user = key.user
        }
        next()
      }, next)
  } else {
    next()
  }
}

var sessionAuth = function(req, res, next) {
  console.log(req.session)
  if (req.session.user == undefined) { return next() }

  models.User.find({ where: { id: req.session.user.id } }).then(function(user) {
    if (!user || user.logged_out_at == null || user.logged_out_at < req.session.user.loggedInAt) {
      req.user = user
    } else {
      req.session.user = null
    }
    next()
  })
}

var assertUser = function(req, res, next) {
  if (!req.user) {
    next(errors.RequiresAuthenticationError)
  } else {
    next()
  }
}

module.exports.apiKeyAuth = apiKeyAuth
module.exports.sessionAuth = sessionAuth
module.exports.restrict = function(options) {
  var requiresAuth = assertUser
  requiresAuth.unless = unless
  return requiresAuth
}
