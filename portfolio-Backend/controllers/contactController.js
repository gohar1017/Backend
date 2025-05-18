const Contact = require('../models/Contact');

// @desc    Get contact information
// @route   GET /api/contact
// @access  Public

exports.getContactInfo = async (req, res) => {
  try {
    const contactInfo = await Contact.findOne();
    if (!contactInfo) {
      return res.status(404).json({ message: 'Contact info not found' });
    }
    res.status(200).json(contactInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// @desc    Update contact information
// @route   PUT /api/contact
// @access  Public
exports.updateContactInfo = async (req, res) => {
  try {
    const contactInfo = await Contact.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true
    });
    res.status(200).json(contactInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// @desc    Submit contact form
// @route   POST /api/contact/submit
// @access  Public
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Add submission to contact form submissions array
    const updatedContact = await Contact.findOneAndUpdate(
      {},
      { $push: { contactFormSubmissions: { name, email, message } } },
      { new: true, upsert: true }
    );
    
    
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully'
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  
};
