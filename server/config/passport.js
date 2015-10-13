/* Initializing passport.js */
var User = require('../models/user')

/*
 * Expose
 */
module.exports = function(app, passport, config) {
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user)
    });
  });
};