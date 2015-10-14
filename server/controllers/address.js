// Handles logic for the Address API

var Promise = require('bluebird');
var models = require('../models')
var Address = models.Address

exports.getAddress = Promise.coroutine(
  function *getAddress(req, res, next) {
    return Address.find(
        { id: req.params.addressID, include: [
                models.Report,
                models.Endorsement
            ] }
    ).then(res.sendModels, next)
  }
);

exports.getAddresses = Promise.coroutine(
  function *getAddress(req, res, next) {
    return Address.findAll().then(res.sendModels, next)
  }
);

// exports.postAddress = Promise.coroutine(
//   function *postAddress(req) {
//     return 'welcome to the post address controller!';
// });

