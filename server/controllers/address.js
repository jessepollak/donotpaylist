// Handles logic for the Address API

var Promise = require('bluebird');
var models = require('../models')
var Address = models.Address

exports.getAddress = Promise.coroutine(
  function *getAddress(req, res, next) {
    return Address.findByID(req.params.addressID).then(res.sendModels, next)
  }
);

exports.getAddresses = Promise.coroutine(
  function *getAddress(req, res, next) {
    return Address.findAll({
      include: [
        models.Report,
        models.Endorsement
      ]
    }).then(res.sendModels, next)
  }
);

exports.getAddressReports = Promise.coroutine(
  function *getAddressReports(req, res, next) {
    return Address
      .findByID(req.params.addressID)
      .then(function(address) {
        return address.reports
      })
      .then(res.sendModels, next)
  }
);

exports.getAddressEndorsements = Promise.coroutine(
  function *getAddressEndorsements(req, res, next) {
    return Address
      .findByID(req.params.addressID)
      .then(function(address) {
        return address.endorsements
      })
      .then(res.sendModels, next)
  }
);
