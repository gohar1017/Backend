const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  location: {
    type: String // e.g., "New York, USA"
  },
  contactFormSubmissions: [{
    name: String,
    email: String,
    message: String,
    date: {
      type: Date,
      default: Date.now
    }
  }]
});

module.exports = mongoose.model('Contact', ContactSchema);