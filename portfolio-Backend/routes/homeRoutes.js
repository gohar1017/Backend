const express = require('express');
const router = express.Router();
const {
  getHomeData,
  updateHomeData
} = require('/controllers/homeController');

// Home page routes (single document)
router.route('/')
  .get(getHomeData)
  .put(updateHomeData);

module.exports = router;