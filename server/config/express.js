var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var secrets = require('./secrets');
var flash = require('express-flash');
var methodOverride = require('method-override');

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

module.exports = function (app) {
  app.set('port', (process.env.PORT || 3000));

  app.disable('x-powered-by');
  app.set('views', path.join(__dirname, '..', 'views'));

  app.set('view cache', false);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, '../..', 'public')));

  app.enable('trust proxy');
  app.use(cookieParser());

  var sess = {
    resave: true,
    saveUninitialized: true,
    // Use generic cookie name for security purposes
    key: 'sessionId',
    secret: secrets.sessionSecret,
    // Add HTTPOnly, Secure attributes on Session Cookie
    // If secure is set, and you access your site over HTTP, the cookie will not be set
    cookie: {
      httpOnly: true
    }
  };

  var node_env = process.env.NODE_ENV;
  console.log('Environment: ' + node_env);
  if(node_env !== 'production') {
    sess.cookie.secure = false; // Serve insecure cookies when not in production
  }

  app.use(session(sess));

  app.use(flash());

  var port = (node_env === 'production') ? app.get('port') : 3000;

  // We only run this workflow when not in Production && require a hot-loader
  if(node_env === 'devhotloader') {
    // We require the bundle inside the if block because
    // it is only needed in a development environment.
    var devServer = require('../dev-server');
    devServer();

    // Any request to localhost:3000 is proxied to webpack-dev-server
    app.all('/assets/*', function(req, res) {
      proxy.web(req, res, {
          target: 'http://localhost:3001'
      });
    });

  }

  // It is important to catch any errors from the proxy or the
  // server will crash. An example of this is connecting to the
  // server when webpack is bundling
  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
  });

};
