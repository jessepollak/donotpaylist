var mongoose = require('mongoose')

var EndorsementSchema = new mongoose.Schema({
  address: { type: String, ref: 'Address' },
  user: { type: String, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

EndorsementSchema.methods = {}
EndorsementSchema.statics = {}

module.exports = mongoose.model('Endorsement', EndorsementSchema)
