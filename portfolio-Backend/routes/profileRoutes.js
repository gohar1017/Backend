const express = require('express');
const router = express.Router();
const {
  getProfile,
  createOrUpdateProfile
} = require('/controllers/profileController');

// Profile routes (only need GET and POST since it's a single document)
router.route('/')
  .get(getProfile)
  .post(createOrUpdateProfile);

module.exports = router;