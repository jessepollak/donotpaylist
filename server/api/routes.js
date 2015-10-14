var addressAPI = require('../controllers/address.js');
var endorsementAPI = require('../controllers/endorsement.js');
var reportAPI = require('../controllers/report.js');
var userAPI = require('../controllers/user.js');

// Address
function getAddress(req, res) {
  res.send('get address api')
}

function postAddress(req, res) {
  res.send('post address api')
}

// Reports
function getReport(req, res) {
  res.send('get report api');
}

function postReport(req, res) {
  res.send('post report api');
}

module.exports = function(router) {
  // Address routes
  router.route('/address/')
    .get(getAddress)

  router.route('/address/:address')
    .post(postAddress)

  // Report routes
  router.route('/report/:address')
    .get(getReport)
    .post(postReport)  
}