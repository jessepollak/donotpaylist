var secrets = require('./secrets');

module.exports = function(app) {
  app.clef = require('clef').initialize({
    appID: secrets.clefAppID,
    appSecret: secrets.clefAppSecret
  })
}
