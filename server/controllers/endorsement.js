var Promise = require('bluebird')
var models = require('../models')
var Endorsement = models.Endorsement

function addUser(req, res, next) {
  req.body.user_id = req.user.id
  next()
}

exports.postEndorsement = [
  addUser,
  Promise.coroutine(
    function *postEndorsement(req, res, next) {
      return Endorsement.createFromAPI(req.body)
        .then(function(object) {
          res.sendModels(object)
        }, next)
    }
  )
]

exports.getEndorsement = Promise.coroutine(
  function *getEndorsement(req, res, next) {
    return models.Endorsement.findOne().then(res.sendModels, next)
  }
)