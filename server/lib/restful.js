var restful = require('node-restful')
var errors = require('./errors')

restful.last = function(req, res, next) {
  if (res.locals.bundle) {
    if (req.body.format === 'js') {
      return res.send(res.locals.bundle)
    } else if (req.body.format === 'html' || req.query.format === 'html') {
      return res.render(this.templateRoot + '/' + req.templatePath, res.locals.bundle)
    } else {
      return next(errors.RestfulError(res.locals.status_code, res.locals.bundle))
    }
  }
  res.send()
};