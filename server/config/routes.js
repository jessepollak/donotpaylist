/**
 * Routes for express app
 */
var express = require('express');
var userController = require('../controllers/user');
var api = require('../api')
var _ = require('lodash');
var Header = require('../../public/assets/header.server');
var App = require('../../public/assets/app.server');
var state = require('../lib/state')
var secrets = require('./secrets')
var authentication = require('../lib/authentication')

module.exports = function(app) {
  // API routes
  app.use('/api', api)
  app.use('/api/v1', api)


  // user routes
  app.get('/login/callback', userController.getClefCallback)
  app.post('/logout', userController.postLogout)

  app.use(authentication.sessionAuth)
  app.get('*', function(req, res, next) {
    // We don't want to be seeding and generating markup with user information
    var user = req.user ? { authenticated: true, isWaiting: false } : { authenticated: false, isWaiting: false };

    res.locals.data =  {
      ConfigStore: { config: {
        baseURL: req.protocol + '://' + req.get('host'),
        state: state.generateRandomStateParameter(req.session),
        clefAppID: secrets.clefAppID
      } },
      UserStore: { user: user }
    };
    next();
  });

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  app.get('*', function (req, res, next) {
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
  });

};;
