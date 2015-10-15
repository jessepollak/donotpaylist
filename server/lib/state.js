var crypto = require('crypto')

module.exports.generateRandomStateParameter = function(session) {
  var state = crypto.randomBytes(32).toString('base64');
  // Make the base64 encoded string URL safe by replacing '+' and '/' with '-' and '_'
  state = state.replace(/\+/g, '-').replace(/\//g, '_');
  session.state = state;
  return state;
};

var stateParameterIsValid = function(session, state) {
    stateIsValid = session.state && session.state.length > 0 && state == session.state;
    delete session.state;
    return stateIsValid;
}

module.exports.verifyStateParameter = function(req, res, next) {
  if (!stateParameterIsValid(req.session, req.query.state)) {
    next(errors.InvalidStateParameter)
  } else {
    next()
  }
}

var errors = require('../lib/errors')

