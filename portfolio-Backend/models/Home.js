const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  heroTitle: {
    type: String,
    required: true
  },
  heroSubtitle: {
    type: String,
    required: true
  },
  heroImage: {
    type: String, // URL to hero image
    required: true
  },
  featuredProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  testimonials: [{
    name: String,
    role: String,
    content: String,
    avatar: String
  }],
  stats: [{
    name: String,
    value: String,
    icon: String
  }]
});

module.exports = mongoose.model('Home', HomeSchema);