var addressAPI = require('../controllers/address.js')
var endorsementAPI = require('../controllers/endorsement.js')
var reportAPI = require('../controllers/report.js')
var userAPI = require('../controllers/user.js')
var apiKeyAPI = require('../controllers/apiKey.js')


module.exports = function(router) {
  // Address routes
  router.route('/addresses/').get(addressAPI.getAddresses)
  router.route('/addresses/:addressID').get(addressAPI.getAddress)
  router.route('/addresses/:addressID/reports').get(addressAPI.getAddressReports)
  router.route('/addresses/:addressID/endorsements').get(addressAPI.getAddressEndorsements)

  router.route('/reports').post(reportAPI.postReport)
  router.route('/reports/:reportID').get(reportAPI.getReport)

  router.route('/endorsements').post(endorsementAPI.postEndorsement)
  router.route('/endorsements/:endorsementID').get(endorsementAPI.getEndorsement)

  router.route('/keys').post(apiKeyAPI.postAPIKey)
  router.route('/keys').get(apiKeyAPI.getAPIKeys)
}