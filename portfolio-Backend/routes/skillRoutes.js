const express = require('express');
const router = express.Router();
const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill
} = require('/controllers/skillController');

// Full CRUD for skills
router.route('/')
  .get(getSkills)
  .post(createSkill);

router.route('/:id')
  .put(updateSkill)
  .delete(deleteSkill);

module.exports = router;