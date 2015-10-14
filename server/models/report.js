var mongoose = require('mongoose')

var ReportSchema = new mongoose.Schema({
  address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

ReportSchema.methods = {}
ReportSchema.statics = {}

module.exports = mongoose.model('Report', ReportSchema)
