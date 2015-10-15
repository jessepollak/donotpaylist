var models = require('../models')
var state = require('../lib/state')
var User = models.User

/**
 * POST /login
 */
exports.getClefCallback = [state.verifyStateParameter, function(req, res, next) {
  req.app.clef.getLoginInformation({ code: req.query.code }, function(err, userInformation) {
    if (err) {
      next(err)
    } else {
      User.findOrCreateFromClefAPI(userInformation)
        .spread(function(user, created) {
          req.session.user = {
            id: user.id,
            loggedInAt: Date.now()
          }
          res.redirect('/dashboard')
        })
    }
  })
}]

exports.postLogout = function(req, res, next) {
  req.app.clef.getLogoutInformation({ logoutToken: req.body.logout_token }, function(err, clefID) {
    if (err) {
      next(err)
    } else {
      User.findByClefID(clefID)
        .then(function(user) {
          if (!user) {
            next("No user with that Clef ID")
          } else {
            return user.logout()
          }
        })
        .then(function() {
          res.json({ success: true })
        }, next)
    }
  })
}
