const express = require('express');
const router = express.Router();
const {
  getContactInfo,
  updateContactInfo,
  submitContactForm
} = require('/controllers/contactController');

// Contact information routes
router.route('/')
  .get(getContactInfo)
  .put(updateContactInfo);

// Contact form submission route
router.route('/submit')
  .post(submitContactForm);

module.exports = router;