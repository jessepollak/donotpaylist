/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

var mongoose = require('mongoose');

// Other oauthtypes to be added

/*
 User Schema
 */

var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true},
  tokens: Array,
  profile: {
    name: { type: String, default: ''},
    gender: { type: String, default: ''},
    location: { type: String, default: ''},
    website: { type: String, default: ''},
    picture: { type: String, default: ''}
  },
});



/*
 Defining our own custom document instance method
 */
UserSchema.methods = {};

/**
 * Statics
 */

UserSchema.statics = {}



module.exports = mongoose.model('User', UserSchema);
