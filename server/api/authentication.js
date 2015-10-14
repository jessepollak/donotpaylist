var mongoose = require('mongoose')
var jwt = require('express-jwt')
var secret = require('../config/secrets')
var User = mongoose.model('User')

jwtMiddleware = jwt({
  secret: secret.jsonWebTokenSecret,
  credentialsRequired: false,
  getToken: function(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  },
  isRevoked: function(req, payload, done) {
    done(null, false)
  }
}).unless({
  path: ['/']
})

module.exports = function(req, res, next) {
  jwtMiddleware(req, res, function(err) {
    if (err) {
      console.log('JWT error', error)
      next(err)
    } else {
      User.findById(req.user.user_id, function(err, user) {
        if (err) {
          next(err)
        }
        else {
          req.user = user
          next()
        }
      })
    }
  })
}