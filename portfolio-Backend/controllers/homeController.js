const Home = require('../models/Home');
const Project = require('../models/Project');

// @desc    Get home page data
// @route   GET /api/home
// @access  Public
exports.getHomeData = async (req, res) => {
  try {
    const homeData = await Home.findOne().populate('featuredProjects');
    if (!homeData) {
      return res.status(404).json({ message: 'Home data not found' });
    }
    res.status(200).json(homeData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update home page data
// @route   PUT /api/home
// @access  Public
exports.updateHomeData = async (req, res) => {
  try {
    const homeData = await Home.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true
    });
    res.status(200).json(homeData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};