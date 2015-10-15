var secret = require('../config/secrets')
var models = require('../models')
var errors = require('../lib/errors')
var basicAuth = require('basic-auth')
var unless = require('express-unless')
var series = require('middleware-flow').series

// jwtMiddleware = jwt({
//   secret: secret.jsonWebTokenSecret,
//   credentialsRequired: false,
//   getToken: function(req) {
//     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//       return req.headers.authorization.split(' ')[1]
//     } else if (req.query && req.query.token) {
//       return req.query.token
//     }
//     return null
//   },
//   isRevoked: function(req, payload, done) {
//     done(null, false)
//   }
// }).unless({
//   path: ['/']
// })

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

var assertUser = function(req, res, next) {
  if (!req.user) {
    next(errors.RequiresAuthenticationError)
  } else {
    next()
  }
}

module.exports = function(options) {
  var requiresAuth = series(apiKeyAuth, assertUser);
  requiresAuth.unless = unless
  return requiresAuth
}
