var mongoose = require('mongoose')

var AddressSchema = new mongoose.Schema({
  address: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
  endorsements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Endorsement' }]
})

AddressSchema.methods = {}
AddressSchema.statics = {}

module.exports = mongoose.model('Address', AddressSchema)
