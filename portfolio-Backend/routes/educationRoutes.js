const express = require('express');
const router = express.Router();
const {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation
} = require('/controllers/educationController');

// Full CRUD for education
router.route('/')
  .get(getEducation)
  .post(createEducation);

router.route('/:id')
  .put(updateEducation)
  .delete(deleteEducation);

module.exports = router;