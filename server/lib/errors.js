var createError = require('http-errors')
var Sequelize = require('sequelize')

module.exports.NotFoundError = NotFoundError = createError(404, 'Resource not found.')
module.exports.ValidationFailedError = ValidationFailedError = createError(400, 'Validation failed.')
module.exports.RequiresAuthenticationError = RequiresAuthenticationError =createError(403, 'Requires authentication.')
module.exports.InvalidStateParameter = InvalidStateParameter = createError(403, 'Invalid state parameter.')

var convertSequelizeError = function(error) {
  if (error instanceof Sequelize.ValidationError) {
    return createError(400, error.message)
  } else {
    return createError(500, error.message)
  }
}
module.exports.handleErrorsJSON = function(err, req, res, next) {
  console.error("ERROR: ", err)
  if (err instanceof Sequelize.Error) {
    err = convertSequelizeError(err)
  }
  res.status(err.status).json({ error: err.message })
}