const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  avatar: {
    type: String, // URL to image
    required: true
  },
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
    instagram: String
  },
  resumeLink: {
    type: String // URL to resume PDF
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);