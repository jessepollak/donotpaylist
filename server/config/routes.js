var express = require('express');
var userController = require('../controllers/user');
var api = require('../api')
var _ = require('lodash');

var authentication = require('../lib/authentication')
var isomorphic = require('../lib/isomorphic')

module.exports = function(app) {
  // API routes
  app.use('/api', api)
  app.use('/api/v1', api)

  app.use(authentication.sessionAuth)

  // user routes
  app.get('/login/callback', userController.getClefCallback)
  app.post('/logout', userController.postLogout)

  app.get('*', isomorphic.setupStores)
  app.get('*', isomorphic.renderReact)
}
