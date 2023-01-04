/* eslint-disable no-console */
// const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  subject: {
    type: String
  },
  message: {
    type: String
  }
});

const ContactUs = mongoose.model('CantactUs', contactUsSchema);

module.exports = ContactUs;
