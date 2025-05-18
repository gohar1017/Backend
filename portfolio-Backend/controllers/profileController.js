const Profile = require('/models/Profile');

// @desc    Get profile data
// @route   GET /api/profile
// @access  Public

exports.getProfile = async (req, res) => {
  try {
    // Since there's only one profile, we get the first document
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// @desc    Create or update profile
// @route   POST /api/profile
// @access  Public

exports.createOrUpdateProfile = async (req, res) => {
  try {
    // Upsert: true creates if doesn't exist, updates if it does
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true
    });
    
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  
};
