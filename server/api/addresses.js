
function getAllAddresses(req, res) {
  res.send('get')
}

function createAddress(req, res) {
  res.send('created')
}

function getAddress(req, res) {
  res.send('get address')
}

function updateAddress(req, res) {
  res.send('update')
}

function deleteAddress(req, res) {
  res.send('delete')
}

module.exports = function(router) {
  router.route('/addresses')
    .get(getAllAddresses)
    .post(createAddress)

  router.route('/addresses/:addressID')
    .get(getAddress)
    .put(updateAddress)
    .delete(deleteAddress)
}