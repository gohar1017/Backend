const Education = require('../models/Education');

// @desc    Get all education entries
// @route   GET /api/education
// @access  Public
exports.getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ startDate: -1 });
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create education entry
// @route   POST /api/education
// @access  Public
exports.createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update education entry
// @route   PUT /api/education/:id
// @access  Public
exports.updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!education) {
      return res.status(404).json({ message: 'Education entry not found' });
    }
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete education entry
// @route   DELETE /api/education/:id
// @access  Public
exports.deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ message: 'Education entry not found' });
    }
    res.status(200).json({ message: 'Education entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};