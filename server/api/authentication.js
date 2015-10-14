var jwt = require('express-jwt')
var secret = require('../config/secrets')

module.exports = jwt({
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