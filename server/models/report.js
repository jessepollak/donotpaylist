var mongoose = require('mongoose')

var ReportSchema = new mongoose.Schema({
  address: { type: String, ref: 'Address' },
  type: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})


ReportSchema.methods = {}
ReportSchema.statics = {}

module.exports = mongoose.model('Report', ReportSchema)
