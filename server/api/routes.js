var addressAPI = require('../controllers/address.js');
var endorsementAPI = require('../controllers/endorsement.js');
var reportAPI = require('../controllers/report.js');
var userAPI = require('../controllers/user.js');

module.exports = function(router) {
  // Address routes
  router.route('/addresses/')
    .get(addressAPI.getAddresses)

  router.route('/addresses/:addressID')
    .get(addressAPI.getAddress)

  router.route('/reports')
    .post(reportAPI.postReport)

  router.route('/reports/:reportID')
    .get(reportAPI.getReport)

  router.route('/endorsements')
    .post(endorsementAPI.postEndorsement)

  router.route('/endorsements/:endorsementID')
    .get(endorsementAPI.getEndorsement)
}