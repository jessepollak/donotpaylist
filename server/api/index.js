
var express = require('express')
var bodyParser = require('body-parser')

var router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

var authentication = require('./authentication')
router.use(authentication)

require('./routes')(router)

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'ping!' });
});

var errors = require('../lib/errors')
router.use(errors.handleErrorsJSON)

module.exports = router