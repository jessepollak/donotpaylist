var createError = require('http-errors')

module.exports.NotFoundError = createError(404, 'Resource not found.')
module.exports.ValidationFailedError = createError(400, 'Validation failed.')
module.exports.RequiresAuthenticationError = createError(403, 'Requires authentication.')

module.exports.RestfulError = function(status_code, errorBundle) {
  return createError(status_code, errorBundle.message)
}

module.exports.handleErrorsJSON = function(err, req, res, next) {
  res.status(err.status).json({ error: err.message })
}