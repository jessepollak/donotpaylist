var _ = require('lodash')
var Header = require('../../public/assets/header.server')
var App = require('../../public/assets/app.server')
var state = require('../lib/state')
var secrets = require('../config/secrets')

var userToStore = function(user) {
  if (user) {
    return { authenticated: true, id: user.id }
  } else {
    return { authenticated: false }
  }
}

var apiKeysToStore = function(user) {
  if (user && user.api_keys) {
    return _.map(user.api_keys, function(v) { return v.serialize() })
  }
}

module.exports.setupStores = function(req, res, next) {
  res.locals.data =  {
    ConfigStore: { config: {
      baseURL: req.protocol + '://' + req.get('host'),
      state: state.generateRandomStateParameter(req.session),
      clefAppID: secrets.clefAppID,
      pusherID: secrets.pusherID
    } },
    UserStore: { user: userToStore(req.user) },
    APIKeyStore: { keys: apiKeysToStore(req.user) }
  };

  next();
}

module.exports.renderReact = function (req, res, next) {
  var html = App(JSON.stringify(res.locals.data || {}), req, res);
  html = html.replace("TITLE", Header.title)
              .replace("META", Header.meta);

  if(process.env.NODE_ENV === 'devhotloader') {
    html = html.replace("LINK", '');
  } else {
    html = html.replace("LINK", Header.link);
  }

  res.contentType = "text/html; charset=utf8";
  res.end(html);
}